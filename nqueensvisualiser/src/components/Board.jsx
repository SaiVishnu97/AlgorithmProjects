import React from 'react'
import '../styling/Board.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { solveNQueens } from './Boardcompute';
function Board() {
   // const nqueensarr=
    // console.log(nqueensarr)
    // const nqindex=Math.floor(Math.random()*nqueensarr.length)
    const size = useSelector((updatedState) => updatedState.nqueen.size);
  const [showQueens, setShowQueens] = React.useState(false);

  useEffect(() => {
    solveNQueens(size);
    // Delay the appearance of queens by 1s
    const delay = setTimeout(() => {
      setShowQueens(true);
    }, 1000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, [size]);
  
    const nqueensboard=useSelector((updatedState)=>updatedState.nqueen.board)
    console.log(nqueensboard)
    const renderSquare = (row, col) => {
        const isEvenSquare = (row + col) % 2 === 0;
        const squareColor = isEvenSquare ? 'light' : 'dark';
    
        return <div key={`${row}-${col}`} className={`square ${squareColor} `}>
            {
            size>0&&nqueensboard[row][col]==='Q'&&<div style={{ margin: '10px' }} className="fa-queen">
            <i style={{ fontSize: '30px' }}  className="fa-regular fa-chess-queen"></i></div>}
            
        </div>;
      };
    
      
    
      const renderBoard = () => {
        const rows = [];
        for (let row = 0; row < size; row++) {
        
          for(let col=0;col<size;col++)
          rows.push(renderSquare(row,col));
        }
        return (<div style={{gridTemplateColumns: `repeat(${size}, 50px)`,gridTemplateRows: `repeat(${size}, 50px)`}}className="chessboard">

          {rows}</div>);
      };
    
      return (
        <div>
          <h1 class="display-5" style={{textAlign:'center'}}>Welcome to NQueens Visualizer Application</h1>
          {size>0&&renderBoard()}
        </div>
      );
    };

export default Board