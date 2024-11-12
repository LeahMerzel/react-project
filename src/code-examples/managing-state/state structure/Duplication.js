// src/components/TeaParty.js

import React from 'react';
import ContentArea from '../../../layout/ContentArea';
import DuplicateState from './DuplicateState';
import DuplicationRemoved from './DuplicationRemoved';

function Duplication() {
  const title = 'Avoiding State Duplication';
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
    <DuplicateState />,
    <DuplicationRemoved />,
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

export default Duplication;
