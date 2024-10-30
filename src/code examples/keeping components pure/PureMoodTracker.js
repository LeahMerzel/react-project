// src/pages/PureMoodTracker.js

import React, { useState } from 'react';

function PureMoodTracker() {
  const [moodHistory, setMoodHistory] = useState([]);
  const [logs, setLogs] = useState([]);
  const moods = ['😀', '😐', '🙁', '🙂'];

  const addMood = (mood) => {
    // Immutably update the state
    const newMoodHistory = [...moodHistory, mood];
    setMoodHistory(newMoodHistory);
    const logMessage = `Added mood ${mood}. Mood history is now: [${newMoodHistory.join(', ')}]`;
    console.log(logMessage);
    setLogs([...logs, logMessage]);
  };

  return (
    <div className="mood-tracker pure">
      <h2>Pure Mood Tracker</h2>
      <p>
        This tracker updates the state immutably by creating a new array when adding a mood. This ensures that React detects state changes and updates the UI accordingly.
      </p>
      <div className="buttons">
        {moods.map((m) => (
          <button key={m} onClick={() => addMood(m)}>
            {m}
          </button>
        ))}
      </div>
      <h3>Mood History:</h3>
      <div className="mood-history">{moodHistory.join(' ') || 'No moods added yet.'}</div>
      <h3>Console Logs:</h3>
      <div className="logs">
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
}

export default PureMoodTracker;
