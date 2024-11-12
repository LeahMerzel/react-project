// src/components/TeaParty.js

import React from 'react';
import ContentArea from '../../../layout/ContentArea';
import StatePreserved from './StatePreserved';
import ResettingWithKey from './ResettingWithKey';

function StateReset() {
  const title = 'Resetting State between re renderes.';
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
    <StatePreserved />,
    <ResettingWithKey />,
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

export default StateReset;
