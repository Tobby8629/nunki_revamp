// import { useState, useEffect } from "react";
import template from "./comingScreen.module.css";
import { comin_soon } from "../../../public/images/Nunki/nunkiImages";
import { Navigate } from "react-router-dom";


const ComingSoon = () => {
  // const [launchDate] = useState(new Date("2024-06-01"));
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const Navigate = useNavigate()
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // function calculateTimeLeft() {
  //   const currentDate = new Date();
  //   const difference = launchDate - currentDate;

  //   if (difference > 0) {
  //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  //     const minutes = Math.floor((difference / 1000 / 60) % 60);
  //     const seconds = Math.floor((difference / 1000) % 60);

  //     return { days, hours, minutes, seconds };
  //   } else {
  //     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }
  // }

  return (
    <section className={template.section}>
      <div className={template.image}>
        <img src={comin_soon} alt="we coming soon"/>
        <button onClick={()=>Navigate({pathname: "/"})}>Go Back</button>
      </div>
      <div className={template.headerwrapper}>
        {/* <h2 className={template.headerText}>"Launching Soon"</h2> */}
      </div>
      {/* <div className={template.main}> */}
        {/* <p>
          We're working on something awesome. Please check back in{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
            minutes, and {timeLeft.seconds} seconds
          </span>
          .
        </p> */}
        {/* <button onClick={()=>Navigate({pathname: "/"})}>Go Back</button> */}
      {/* </div> */}
      
    </section>
  );
};

export default ComingSoon;