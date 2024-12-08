// src/components/ContentArea.js

import React from 'react';
import '../style/ContentArea.css';

function ContentArea({
  title,
  description,
  examples = [],
  conclusion,
  sections = [],
}) {
  let renderSections = [];

  if (sections.length > 0) {
    renderSections = sections;
  } else {
    if (examples.length > 0) {
      renderSections.push({
        explanation: null,
        examples: examples,
      });
    }
  }

  return (
    <div className="content-area">
      <h1 className="content-title">{title}</h1>
      <div className="content-description">{description}</div>

      {renderSections.map((section, index) => (
        <div key={index} className="content-section">
          {section.explanation && (
            <div className="content-explanation">{section.explanation}</div>
          )}
          {section.examples.length > 0 && (
            <div
              className={`content-examples examples-${section.examples.length}`}
            >
              {section.examples.length === 1 ? (
                <div className="example single-example">
                  {section.examples[0]}
                </div>
              ) : (
                <>
                  {section.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className={`example ${
                        idx % 2 === 0 ? 'left-example' : 'right-example'
                      }`}
                    >
                      {example}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="content-conclusion">{conclusion}</div>
    </div>
  );
}

export default ContentArea;
