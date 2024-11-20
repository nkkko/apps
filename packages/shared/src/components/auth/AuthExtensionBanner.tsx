import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { BottomBannerContainer } from '../banners';
import { OnboardingHeadline } from './OnboardingHeadline';
import { MemberAlready } from '../onboarding/MemberAlready';
import { AuthTriggers } from '../../lib/auth';
import { useAuthContext } from '../../contexts/AuthContext';
import { GetExtensionButton } from '../buttons/GetExtensionButton';

export const BottomBannerBg =
  "bg-cover bg-[url('https://daily-now-res.cloudinary.com/image/upload/s--lf8LUJjq--/f_auto/v1732012913/login-popover-dailydev_mxb7lw')]";

export const AuthExtensionBanner = (): ReactElement => {
  const { showLogin } = useAuthContext();

  return (
    <BottomBannerContainer
      className={classNames(
        'gap-10 border-t border-none border-accent-cabbage-default py-10 shadow-3',
        BottomBannerBg,
      )}
    >
      <section className="w-[36rem]">
        <OnboardingHeadline
          className={{ title: 'typo-mega3', description: 'typo-title3' }}
        />
      </section>
      <section className="flex w-[18rem] flex-col items-center justify-center gap-5">
        <GetExtensionButton />
        <MemberAlready
          onLogin={() =>
            showLogin({
              trigger: AuthTriggers.Onboarding,
              options: { isLogin: true },
            })
          }
          className={{
            container: '!text-lg leading-5 text-text-tertiary',
            login: '!text-lg font-bold !text-text-link',
          }}
        />
      </section>
    </BottomBannerContainer>
  );
};