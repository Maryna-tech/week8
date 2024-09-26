import { useState } from 'react';
import './App.css';

function App() {
  const[book, setBook] = useState({
    title:"The $100 Startup",
    author:"Chris Guillebeau",
    year:2012,
    rating:"5 stars"
})

const changeYear=()=>{
  setBook({...book, year:"2014"})

}
  return ( 
  <div className="App">
    <h2>{book.title}</h2>
    <h2>{book.author}</h2>
    <h2>{book.year}</h2>
    <h2>{book.rating}</h2>
    <button onClick={changeYear}>Click here</button>
    </div>
  );
}

export default App;
