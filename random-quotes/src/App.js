import logo from './logo.svg';
import './App.css';
import  React, { useState } from 'react';

function App() {
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');
  const getQuote = ()=>{
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(`${data.content} — ${data.author}`);
      setQuote(data.content);
      setAuthor(data.author);
  })
}
  return (
    <div className="App">
        <div className="container">
        
        <div className="card">
          <div className="quote-mark">
          <img src="https://www.flaticon.com/svg/vstatic/svg/56/56937.svg?token=exp=1611329093~hmac=a972d1dda0085974cf62f74796680e62"></img>
          </div>
          <div className="quote">{quote}</div>
          <div className="author">—{author}</div>
          
        </div>
        <button className="generateQuote" onClick={getQuote}>Get Quote</button>
        </div>

    </div>
  );
}

export default App;
