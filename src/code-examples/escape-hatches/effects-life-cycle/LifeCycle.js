// src/components/TeaParty.js

import React from 'react';
import ContentArea from '../../../layout/ContentArea';
import InappropriateReconnection from './InappropriateReconnection';
import DependencyArray from './DependencyArray';
import SyncronizationOff from './SyncronizationOff';
import SyncronizationOn from './SyncronizationOn';


function LifeCycle() {
  const title = 'Life Cycle of Reactive Effects';
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
      examples: [<InappropriateReconnection />, <DependencyArray />],
    },
    {
      explanation: <p>Explanation for the first pair of examples.</p>,
      examples: [<SyncronizationOff />, <SyncronizationOn />],
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

export default LifeCycle;
