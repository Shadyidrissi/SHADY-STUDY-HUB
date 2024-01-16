import React, { useState, useEffect } from 'react';
import logo from "../../src/Images/filiere-image3-removebg-preview_auto_x2.png";

const CountdownTimer = ({ targetTime }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetTime - now;
    
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
    </span>
  );
};

function Intro() {
  // Set the target time for the countdown (replace with your desired end time)
  const targetTime = new Date('2024-06-06T00:00:00'); // Set your specific date and time here

  return (
    <>
      <div className="test">
      <div className="intro-text">
          <h1>WELCOME TO <span id="brand">SHADY STUDY HUB</span> </h1>
          <h4>
            {" "}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </h4>
        </div>
        <img
          src={logo}
          alt="filiere-image3-removebg-preview-auto-x2"
          border="0"
          id="image"
        />
      </div>
        <div className="time">
          <ul id="trening">
            <li>TRENING (STAGE)</li>
            <li>1/2/2024</li>
            <li>1/4/2024</li>
            {/* <li>6/1/2024</li> */}
          </ul>
          <ul id="FF">
            <li>NATIONAL EXAM (FIN FORMATION)</li>
            <li>
              <CountdownTimer targetTime={targetTime} />
            </li>
          </ul>
        </div>

    </>
  );
}

export default Intro;
