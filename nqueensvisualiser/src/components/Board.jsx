import React from 'react'
import '../styling/Board.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { solveNQueens } from './Boardcompute';
function Board() {
    const size = useSelector((updatedState) => updatedState.nqueen.size);

  useEffect(() => {
    solveNQueens(size);
   
  }, [size]);
  
    const nqueensboard=useSelector((updatedState)=>updatedState.nqueen.board)
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