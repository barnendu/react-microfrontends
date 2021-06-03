import React from 'react';


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
          Button from MFE1
        </h3>
        <React.Suspense fallback='Loading Button'>
          <h2> Second Application</h2>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
