import React, { ReactElement } from 'react';
import BackgroundImage from './background-image';
import CTA from './cta';

export default function Stage(): ReactElement {
  return (
    <BackgroundImage>
      <CTA cta="iLikePlastic" />
    </BackgroundImage>
  );
}
