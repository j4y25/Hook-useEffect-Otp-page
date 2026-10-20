import React, { useEffect, useState } from 'react'
import './OtpPage.css';

const OtpPage = () => {

  const [second, setSecond] = useState(120)

  const min = Math.floor(second / 60);
  const sec = second % 60;
  
  console.log('min: ', min);
  console.log('sec: ', sec);
  

  
   useEffect(() => {
  const timer = setInterval(() => {
    if (second <= 0) {
      clearInterval(timer);
    } else {
      setSecond((state) => state = state - 1);
    }
  }, 1000);

  return () => clearInterval(timer);
}, [second]);
  
 
  return (
    <> 
    <div className="main">
    <div className="otp-component">
        
        <input className='otp-box' type="number" placeholder='Enter OTP'/>

       <p>{min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}</p>

        <button onClick={() => {
          setSecond(120)
        }}>Resend OTP</button>
       
    </div>
    </div>
    </>
  )
}

export default OtpPage