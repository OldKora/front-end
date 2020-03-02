import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DUE_DATE = '04/01/2020';

const Countdown = () => {
    const [duration, setDuration] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });
    useEffect(() => {
        const intervale = setInterval(() => {
            const now = moment(new Date());
            const end = moment(DUE_DATE);
            const _duration = moment.duration(now.diff(end));
            setDuration({
                days: Math.abs(_duration.days()),
                hours: Math.abs(_duration.hours()),
                minutes: Math.abs(_duration.minutes()),
                seconds: Math.abs(_duration.seconds()),
            })
        }, 1000);

        if (duration.days === 0
            && duration.hours === 0
            && duration.minutes === 0
            && duration.seconds === 0
            ) return clearInterval(intervale);
        
    }, [duration]);
    return(
        <div className="countdown">
            <h2 className="days">
                {duration.days}
                <span>Days</span>
            </h2>
            <h2 className="hours">
                {duration.hours}
                <span>Hours</span>
            </h2>
            <h2 className="min">
                {duration.minutes}
                <span>Minutes</span>
            </h2>
            <h2 className="sec">
                {duration.seconds}
                <span>Secondes</span>
            </h2>
        </div>
    )
}

 export default Countdown;