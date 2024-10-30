import React, { useState } from 'react';

function ImpureMoodTracker() {
  const [moodHistory, setMoodHistory] = useState([]);
  const [logs, setLogs] = useState([]);

  const moods = ['😀', '😐', '🙁','🙂'];

  const addMood = (mood) => {
    // Impurely mutate the state
    moodHistory.push(mood); // Direct mutation
    setMoodHistory(moodHistory); // Setting the same array reference
    const logMessage = `Added mood ${mood}. Mood history is now: [${moodHistory.join(', ')}]`;
    console.log(logMessage);
    setLogs([...logs, logMessage]);
  };

  return (
    <div className='mood-tracker impure'>
      <h2>Impure Mood Tracker</h2>
      <p>
        This tracker mutates the state directly by using <code>push</code> and then calls <code>setMoodHistory</code> with the same array reference. React may not detect the state change, leading to the UI not updating.
      </p>
      <div className='buttons'>
        {moods.map((m) => (
          <button key={m} onClick={() => addMood(m)}>
            {m}
          </button>
        ))}
      </div>
      <h3>Mood History:</h3>
      <div className='mood-history'>
        {moodHistory.join(' ') || 'No moods added yet.'}
      </div>
      <h3>Console Logs:</h3>
      <div className="logs">
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
}

export default ImpureMoodTracker;

