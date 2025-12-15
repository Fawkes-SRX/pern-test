// client/src/App.jsx
import { useState, useEffect } from 'react';

function App() {
  // 1. STATE: This is where we store the data from the server
  const [serverTime, setServerTime] = useState(null);

  // 2. EFFECT: This runs ONCE when the page loads
  useEffect(() => {
    // Replace this URL with YOUR live Render backend URL from Phase 2
    // Example: fetch('https://pern-test.onrender.com/time')
    fetch('https://pern-test-xidr.onrender.com/time') 
      .then(response => response.json())
      .then(data => setServerTime(data.now)) // 'now' is the column name from Postgres
      .catch(error => console.error('Error fetching time:', error));
  }, []); // The empty [] array means "only run this once"

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>PERN Stack Sanity Check</h1>
      <hr />
      <p>
        <strong>Server Time:</strong> {serverTime ? serverTime : 'Loading...'}
      </p>
    </div>
  );
}

export default App;