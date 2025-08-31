import React, { useState, useEffect } from "react";

const Counter = () => {
  const [hours, setHours] = useState();

  const [minutes, setMinutes] = useState();

  const [seconds, setSeconds] = useState();

  const [start, setStart] = useState(false);

  const [tId, setTId] =  useState()

  // useEffect(() => {
  //   if (start) {
  //     let timer = setInterval(() => {
  //       setSeconds((prevSeconds) => {
  //         if (prevSeconds === 0) {
  //           setMinutes((prevMinutes) => {
  //             if (prevMinutes === 0) {
  //               setHours((prevHours) => {
  //                 if (
  //                   prevHours === 0 &&
  //                   prevMinutes === 0 &&
  //                   prevSeconds === 0
  //                 ) {
  //                   clearInterval(timer);
  //                   setStart(false);
  //                   return 0;
  //                 }
  //                 return prevHours - 1;
  //               });
  //               return 59;
  //             }
  //             return prevMinutes - 1;
  //           });

  //           return 59;
  //         }
  //         return prevSeconds - 1;
  //       });
  //     }, 1000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }
  // }, [start]);

  useEffect(()=>{
    let timerId;
    if(start){
      timerId= setInterval(()=>{
        runTimer(seconds, minutes)
      },1000)
      setTId(timerId);
    }
    return()=>{
      clearInterval(timerId)
    }
  },[start,seconds, minutes, hours])

  const runTimer = (seconds, minutes)=>{
    if(seconds>0){
      setSeconds((sec)=>sec-1);
    }else if(seconds === 0 && minutes >0){
      setSeconds(59);
      setMinutes((min)=>min-1);
    }else {
      setMinutes(59);
      setSeconds(59);
      setHours((hr)=>hr-1);
    }
  }
  
  const onInutChange = (event) => {
    const val = parseInt(event.target.value)
    switch (event.target.id) {
      case "hours":
        setHours(val)
        break;
      case "minutes":
        setMinutes(val)
        break;
      case "seconds":
        setSeconds(val);
        break;
    }
  };

  return (
    <>
      <div>Countdown timer</div>

      <div>
        <input
          id="hours"
          placeholder="hh"
          type="number"
          value={hours ?? ""}
          onChange={(event) => onInutChange(event)}
        />
        <span>:</span>
        <input
          id="minutes"
          placeholder="mm"
          type="number"
          value={minutes ?? ""}
          onChange={(event) => onInutChange(event)}
        />
        <span>:</span>
        <input
          id="seconds"
          placeholder="ss"
          type="number"
          value={seconds ?? ""}
          onChange={(event) => onInutChange(event)}
        />
        <button onClick={() => setStart(true)}> start </button>
      </div>
    </>
  );
};

export default Counter;
