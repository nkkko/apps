import React, { forwardRef, ReactElement, Ref } from 'react';
import {
  Card,
  CardImage,
  CardSpace,
  CardTextContainer,
  CardTitle,
} from '../common/Card';
import AdLink from './common/AdLink';
import AdAttribution from './common/AdAttribution';
import { AdImage } from './common/AdImage';
import { AdPixel } from './common/AdPixel';
import type { AdCardProps } from './common/common';
import { RemoveAd } from './common/RemoveAd';
import { usePlusSubscription } from '../../../hooks/usePlusSubscription';

export const AdGrid = forwardRef(function AdGrid(
  { ad, onLinkClick, domProps }: AdCardProps,
  ref: Ref<HTMLElement>,
): ReactElement {
  const { isEnrolledNotPlus } = usePlusSubscription();
  return (
    <Card {...domProps} data-testid="adItem" ref={ref}>
      <AdLink ad={ad} onLinkClick={onLinkClick} />
      <CardTextContainer>
        <CardTitle className="my-4 line-clamp-4 font-bold typo-title3">
          {ad.description}
        </CardTitle>
      </CardTextContainer>
      <CardSpace />
      <AdImage ad={ad} ImageComponent={CardImage} />
      <CardTextContainer>
        {isEnrolledNotPlus ? (
          <div className="flex items-center pt-2.5">
            <AdAttribution ad={ad} />
            <RemoveAd />
          </div>
        ) : (
          <AdAttribution ad={ad} className={{ main: 'mb-2 mt-4' }} />
        )}
      </CardTextContainer>
      <AdPixel pixel={ad.pixel} />
    </Card>
  );
});
