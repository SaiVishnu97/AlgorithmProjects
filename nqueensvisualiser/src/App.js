import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { useState } from 'react';
import Input from './components/Input';
function App() {
  const [isSizeTaken,setIsSizeTaken]=useState(false)
  return (
    <div className="App">
      {!isSizeTaken&&<Input setIsSizeTaken={setIsSizeTaken}></Input>}
     {isSizeTaken&&<Board></Board>}
    </div>
  );
}

export default App;
