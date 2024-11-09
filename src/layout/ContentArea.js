// src/components/ContentArea.js

import React from 'react';
import '../style/ContentArea.css';

function ContentArea({ title, description, examples = [], conclusion }) {
  return (
    <div className="content-area">
      <h1 className="content-title">{title}</h1>
      <div className="content-description">{description}</div>

      {examples.length > 0 && (
        <div className={`content-examples examples-${examples.length}`}>
          {examples.length === 1 ? (
            <div className="example single-example">
              {examples[0]}
            </div>
          ) : (
            <>
              <div className="example left-example">
                {examples[0]}
              </div>
              <div className="example right-example">
                {examples[1]}
              </div>
            </>
          )}
        </div>
      )}

      <div className="content-conclusion">{conclusion}</div>
    </div>
  );
}

export default ContentArea;
