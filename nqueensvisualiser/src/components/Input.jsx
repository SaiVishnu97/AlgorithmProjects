import React from 'react'
import { useDispatch } from 'react-redux';
import { boardSetup } from '../redux';
function Input({setIsSizeTaken}) {
    const [nQueensInput, setNQueensInput] = React.useState(1);
    const [isValidInput,setIsValidInput]=React.useState(true)
    const dispatch=useDispatch()
    const handleInputChange = (e) => {
        setNQueensInput(e.target.value);
        const size=parseInt(e.target.value)
        if(size&&size<=10&&size>0)
        {
            setIsValidInput(true)
        }
        else
        {
            console.log("No not a valid size number")
            setIsValidInput(false)
        }
    };
  
    const handleSubmit = () => {
      // You can implement your logic for handling the input submission here
      // For now, let's just log the input to the console
      dispatch(boardSetup(nQueensInput))
      setIsSizeTaken(true)
    };
  
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
        <div className="card text-center">
          <div className="card-header">
            <h5>Welcome to the NQueens Visualizer</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Please provide the input only between the values 1 and 10</p>
            <div className="input-group mb-3" style={{display:"flex",flexDirection:"column"}}>
              <input
                type="number"
                className="form-control"
                placeholder="Enter a number"
                value={nQueensInput}
                onChange={handleInputChange}
                max={10}
                min={1}
                style={{width:"95%",borderRadius:"5px"}}
              />
              <br></br>
              <div >
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isValidInput}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Input