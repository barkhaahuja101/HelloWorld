import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ClickableButton() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    axios.get('http://localhost:8080/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };


return (
  <div>
    <button onClick={handleClick}>Click Me</button>
    <p>{message}</p>
  </div>
);

}

function App() {
  return (
    <div>
      <h3>Click the Button</h3>
      <ClickableButton />
    </div>
  );
}

export default App;
