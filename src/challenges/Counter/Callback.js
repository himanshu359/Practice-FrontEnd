import React from 'react';


const _A =({onClick})=>{
    console.log("A");
    return(
        <button onClick={onClick} type='button' style={{width:'30px', height:'30px'}}/>
    )
}


const A = React.memo(_A);
export const Callback = ()=>{
    console.log('App')
    const [state, setState] =  React.useState(0);

    const handleClick = React.useCallback(()=>{
        setState(state=>state+1)
    },[])

    return (
        <>
        {state}
        <A onClick={handleClick} />
        </>
    )
}    