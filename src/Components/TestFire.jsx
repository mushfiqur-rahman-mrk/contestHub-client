import { useEffect, useState } from "react";

const TestFire = ({deadline}) => {

    const [day,setDay]=useState(0)
    const [hour,setHour]=useState(0)
    const [min,setMin]=useState(0)
    const [sec,setSec]=useState(0)
     

    // const deadlines='November, 28,2023'
    // // const beadLine=deadline;
    // // console.log('beadLine',deadline);
     
    // // console.log('deadline',Date.parse(endTime));
    // // console.log('now',Date.now);
 
    const getTIme=()=>{
        const time= Date.parse(deadline)-Date.now()
        // const time= Date.parse(deadline)-Date.parse(todayDate)
        setDay(Math.floor(time/(1000*60*60*24)))
        setHour(Math.floor(time/(1000*60*60)%24))
        setMin(Math.floor((time/1000/60)%60))
        setSec(Math.floor((time/1000)%60))
    }
    useEffect(()=>{
        const interval=  setInterval(()=>getTIme(),1000)
        return()=>{
            return clearInterval(interval)
        } 
    },[getTIme])


  return (
    <>
      <div>
        <div className="grid grid-cols-4">
            <div>
                <h1>{day<10 ? '0'+day : day}</h1>
                <span>Days</span>
            </div>
            <div>
            <h1>{hour<10 ? '0'+hour : hour}</h1>
                <span>Hours</span>
            </div>
            <div>
            <h1>{min<10 ? '0'+min : min}</h1>
                <span>Minuts</span>
            </div>
            <div>
            <h1>{sec<10 ? '0'+sec : sec}</h1>
                <span>Seconds</span>
            </div>
        </div>

      </div>

 
    </>
  );
};

export default TestFire;