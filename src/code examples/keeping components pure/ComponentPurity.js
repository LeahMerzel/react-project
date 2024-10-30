// src/pages/ComponentPurity.js

import React from 'react';
import ImpureMoodTracker from './ImpureMoodTracker';
import PureMoodTracker from './PureMoodTracker';

function ComponentPurity() {
  return (
    <div className="component-purity">
      <h1>Keeping Components Pure</h1>
      <p>
        This example demonstrates the importance of keeping components pure in React. The impure version directly mutates the state, leading to unexpected behavior, while the pure version updates the state immutably, ensuring predictable and reliable updates.
      </p>
      <div className="trackers">
        <div className="tracker">
          <ImpureMoodTracker />
        </div>
        <div className="tracker">
          <PureMoodTracker />
        </div>
      </div>
    </div>
  );
}

export default ComponentPurity;
