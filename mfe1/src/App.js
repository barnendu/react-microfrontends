import React from 'react';
import Button from './Button';
function App() {
  return (
    <div>
      <h1>
        Micro-Frontend Host
      </h1>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border:
            '4px solid black',
        }}>
        <h3>
        Hello MFE1
        </h3>
        <React.Suspense fallback='Loading...'>
      <Button/>
      </React.Suspense>
    </div>
  </div>
  );
}

export default App;
