import React, { useState } from 'react';

function Dracula(props) {
  const [isNightAlready, setNight] = useState(false);

  return (
    <>
      <h1>{isNightAlready ? '🧛‍♂️' : '🙍‍♂️'}</h1>
      <button onClick={() => setNight(!isNightAlready)}>
        {isNightAlready ? 'set to day 🌞' : 'set to night 🌙'}
      </button>
    </>
  );
}

export default Dracula;
