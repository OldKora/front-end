import React from 'react';

const Countdown = () => {
    return(
        <div className="countdown">
            <h2 className="days">
                30
                <span>Days</span>
            </h2>
            <h2 className="hours">
                00
                <span>Hours</span>
            </h2>
            <h2 className="min">
                00
                <span>Minutes</span>
            </h2>
            <h2 className="sec">
                00
                <span>Secondes</span>
            </h2>
        </div>
    )
}

 export default Countdown;