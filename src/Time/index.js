import { useState, useEffect } from "react";
import "./style.css";

const formatDate = (currentDate) =>
    currentDate.toLocaleString(
        undefined,
        {
            month: "long",
            weekday: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );


const Time = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(IntervalId);
    }, []);

    return (
        <p className="time">
            Dzisiaj jest
            {" "}
            {formatDate(currentDate)}
        </p>
    )
};

export default Time;