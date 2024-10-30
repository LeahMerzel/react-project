// src/components/ContentArea.js

import React from 'react';
import '../style/ContentArea.css';

function ContentArea({ children }) {
  return (
    <div className="content-area">
      {children}
    </div>
  );
}

export default ContentArea;
