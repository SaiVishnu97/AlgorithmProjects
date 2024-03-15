import { boardUpdate,store } from '../redux';
function checkvalidity(tempres,row,col,n)
{
    //checkvertical

    for(let i=0;i<row;i++)
        if(tempres[i][col]==='Q')
            return false;
    //checkdiagonal rightbottom to leftupper
    let j=col-1;
    for(let i=row-1;i>=0&&j>=0;i--,j--)
        if(tempres[i][j]==='Q')
            return false;
    //checkdiagonal leftbottom to rightupper
    j=col+1;
    for(let i=row-1;i>=0&&j<n;i--,j++)
        if(tempres[i][j]==='Q')
            return false;
    return true;
}
function sleep(millisecs)
{
    return new Promise((resolve)=>setTimeout(resolve,millisecs))
}
async function nqueens(res,tempres,row,n)
{
    if(row===n)
    {   
        //res.push(tempres.map((val)=>[...val]))
        console.log(row)
        return true
    }
    for(let i=0;i<n;i++)
    {

        tempres[row][i]='Q'
        await sleep(500)
        store.dispatch(boardUpdate({row,col:i,val:'Q'}))
     //   const updatedState = store.getState();

        if(checkvalidity(tempres,row,i,n))
            if(await nqueens(res,tempres,row+1,n))
                return true
        await sleep(500) 
        store.dispatch(boardUpdate({row,col:i,val:'.'}))
        tempres[row][i]='.'
    }
    return false
}
export var solveNQueens = async function(n) {
    var res=[]
    var tempres=[]
   // store.dispatch(boardSetup(n))
    console.log(store.getState())
    console.log(n)
    for(let i=0;i<n;i++)
    {
        tempres.push(Array.from({length:n},()=>'.'))
        console.log("Size is updated")
    }
   await nqueens(res,tempres,0,n)
    // return res;
};
