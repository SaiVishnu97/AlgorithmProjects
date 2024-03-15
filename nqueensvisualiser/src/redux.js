import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState={
    board:[],
    size:0
}
const boardSlice= createSlice(
    {
        name:"nqueensboard",
        initialState,
        reducers:
        {
            boardSetup:(state,action)=>
            {
                state.size=parseInt(action.payload)
                state.board=[];
                for(let i=0;i<action.payload;i++)
                    state.board.push(Array.from({length:action.payload},()=>'.'))
            },
            boardUpdate:(state,action)=>
            {
                const {row,col,val}=action.payload
                state.board[row][col]=val
            }
        }
    }
)

export const {boardSetup,boardUpdate}=boardSlice.actions

export const store= configureStore({
    reducer:
    {
        nqueen:boardSlice.reducer
    }
})
// store.subscribe(()=>console.log(store.getState()))
