import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { OnboardingTitleGradient } from '../onboarding/common';

interface ClassName {
  title?: string;
  description?: string;
}

interface OnboardingHeadlineProps {
  title?: string;
  description?: string;
  className?: ClassName;
}

const defaultTitle = 'Where developers suffer together';
const defaultDescription = `We know how hard it is to be a developer. It doesn&apos;t have to be.
        Personalized news feed, dev community and search, much better than
        what&apos;s out there. Maybe ;)`;

export function OnboardingHeadline(
  { title, description, className }: OnboardingHeadlineProps = {
    title: defaultTitle,
    description: defaultDescription,
  },
): ReactElement {
  return (
    <>
      <OnboardingTitleGradient className={classNames('mb-4', className?.title)}>
        {title}
      </OnboardingTitleGradient>

      <h2 className={className?.description}>{description}</h2>
    </>
  );
}
