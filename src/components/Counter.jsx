import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Only allow incrementing if count is less than 10
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    // Prevent the count from going below 0
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Count: {count}</h2>
      
      <div>
        <button 
          onClick={handleDecrement} 
          disabled={count === 0}
          style={{ padding: '8px 16px', marginRight: '10px' }}
        >
          Decrement
        </button>
        
        <button 
          onClick={handleIncrement} 
          disabled={count === 10}
          style={{ padding: '8px 16px' }}
        >
          Increment
        </button>
      </div>

      {/* Conditionally render the message when count reaches 10 */}
      {count === 10 && (
        <p style={{ color: 'red', fontWeight: 'bold', marginTop: '20px' }}>
          Maximum reached!
        </p>
      )}
    </div>
  );
}