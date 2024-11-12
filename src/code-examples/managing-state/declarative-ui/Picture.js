// src/components/TeaParty.js

import React from 'react';
import ContentArea from '../../../layout/ContentArea';
import InteractivePicture from './InteractivePicture';

function Picture() {
  const title = 'Picture';
  const description = (
    <p>
      In this example,
    </p>
  );
  const conclusion = (
    <p>
      sample
    </p>
  );

  const examples = [
    <InteractivePicture />,
  ];

  return (
    <ContentArea
      title={title}
      description={description}
      examples={examples}
      conclusion={conclusion}
    />
  );
}

export default Picture;
