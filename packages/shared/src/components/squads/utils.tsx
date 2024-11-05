import React, { PropsWithChildren, ReactElement } from 'react';
import classed from '../../lib/classed';
import {
  Typography,
  TypographyColor,
  TypographyTag,
  TypographyType,
} from '../typography/Typography';
import {
  BasePageContainer,
  pageBorders,
  WithClassNameProps,
} from '../utilities';
import { SourcePermissions, Squad } from '../../graphql/sources';
import { TimerIcon } from '../icons/Timer';
import { Modal } from '../modals/common/Modal';
import { IconSize } from '../Icon';
import { PromptOptions } from '../../hooks/usePrompt';

export const SquadTitle = ({
  children,
  className,
}: PropsWithChildren<WithClassNameProps>): ReactElement => (
  <Typography
    className={className}
    tag={TypographyTag.H1}
    type={TypographyType.LargeTitle}
    bold
  >
    {children}
  </Typography>
);

export const SquadSubTitle = ({
  children,
}: PropsWithChildren): ReactElement => (
  <Typography type={TypographyType.Callout} color={TypographyColor.Tertiary}>
    {children}
  </Typography>
);
export const SquadTitleColor = classed('span', 'text-brand-default');

export const ManageSquadPageContainer = classed(
  BasePageContainer,
  '!p-0 laptop:min-h-page h-full !max-w-[42.5rem] !w-full',
  pageBorders,
);

export const ManageSquadPageMain = classed('div', 'flex flex-1 flex-col');

export const isPrivilegedMember = (squad: Squad): boolean =>
  squad.currentMember?.permissions?.includes(SourcePermissions.Moderate);

export const createModerationPromptProps: PromptOptions = {
  title: 'Your post has been submitted for review',
  description:
    "Your post is now waiting for the admin's approval. We'll notify you once it's been reviewed.",
  okButton: {
    title: 'Got it',
    className: 'tablet:w-full',
  },
  cancelButton: null,
  promptSize: Modal.Size.XSmall,
  icon: <TimerIcon size={IconSize.XXXLarge} />,
};
