import React, { ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { feature } from '../../lib/featureManagement';
import { checkIsBrowser, checkIsExtension, UserAgent } from '../../lib/func';
import { useFeaturesReadyContext } from '../GrowthBookProvider';
import { AuthExtensionBanner } from './AuthExtensionBanner';
import { AuthenticationBanner } from './AuthenticationBanner';
import { getBasicUserInfo } from '../../graphql/users';
import { OnboardingHeadline } from './OnboardingHeadline';
import { sizeClasses } from '../ProfilePicture';
import { Image, ImageType } from '../image/Image';

const UserPersonalizedBanner = ({
  userId,
}: {
  userId: string;
}): ReactElement => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user_personalized_banner', userId],
    queryFn: () => getBasicUserInfo(userId),
  });
  console.log('user', user);
  return (
    <AuthenticationBanner>
      {user?.image && (
        <Image
          className={`mr-2 rounded-full object-cover ${sizeClasses.xlarge}`}
          src={user.image}
          alt={`Avatar of ${user.username}`}
          type={ImageType.Squad}
        />
      )}
      <div>Hello</div>
      <OnboardingHeadline
        className={{ title: 'typo-mega3', description: 'mb-8 typo-title3' }}
      />
    </AuthenticationBanner>
  );
};

export const PostAuthBanner = (): ReactElement => {
  const searchParams = useSearchParams();
  const { getFeatureValue } = useFeaturesReadyContext();
  const showExtensionCTA = getFeatureValue(feature.postBannerExtensionPrompt);
  const isCompatibleBrowser =
    (checkIsBrowser(UserAgent.Chrome) || checkIsBrowser(UserAgent.Edge)) &&
    !checkIsExtension();

  if (showExtensionCTA && isCompatibleBrowser) {
    return <AuthExtensionBanner />;
  }

  const userId = searchParams.get('userid');
  console.log('userid', userId);
  if (userId) {
    return <UserPersonalizedBanner userId={userId} />;
  }

  return <AuthenticationBanner />;
};
