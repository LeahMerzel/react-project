// src/components/TeaParty.js

import React from 'react';
import ContentArea from '../../../layout/ContentArea';
import BrokenTimer from './BrokenTimer';
import FixedTimer from './FixedTimer';

function TeaParty() {
  const title = 'Tea Party: Pure vs Impure Components';
  const description = (
    <p>
      In this example, we demonstrate the difference between pure and impure components in React.
      The impure component uses external variables leading to side effects, whereas the pure component maintains state internally.
    </p>
  );
  const conclusion = (
    <p>
      Using pure components ensures predictable behavior and easier debugging, while impure components can cause unexpected issues due to side effects.
    </p>
  );

  const examples = [
    <BrokenTimer />,
    <FixedTimer />,
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

export default TeaParty;
