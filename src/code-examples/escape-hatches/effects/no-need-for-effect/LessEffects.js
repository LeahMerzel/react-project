// src/components/LessState.js

import React from 'react';
import ContentArea from '../../../../layout/ContentArea';
import RedundantStateAndEffect from './RedundantStateAndEffect';
import EffectRedundancyRemoved from './EffectRedundancyRemoved';
import CashWithEffect from './CashWithEffect';
import CashWithUseMemo from './CashWithUseMemo';
import SubmitFormWithEffect from './SubmitFormWithEffect';
import SubmitFormWithEventHandler from './SubmitFormWithEventHandler';

function LessEffects() {
  const title = 'Less State, Less Effects - Same Result, Better Code';
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

  const sections = [
    {
      explanation: <p>Explanation for the first pair of examples.</p>,
      examples: [<RedundantStateAndEffect />, <EffectRedundancyRemoved />],
    },
    {
      explanation: <p>Explanation for the second pair of examples.</p>,
      examples: [<CashWithEffect />, <CashWithUseMemo />],
    },
    {
      explanation: <p>Explanation for the second pair of examples.</p>,
      examples: [<SubmitFormWithEffect />, <SubmitFormWithEventHandler />],
    }
  ];

  return (
    <ContentArea
      title={title}
      description={description}
      sections={sections}
      conclusion={conclusion}
    />
  );
}

export default LessEffects;
