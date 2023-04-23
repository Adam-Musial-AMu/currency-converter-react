import { useState, useEffect } from "react";

export const useCurrentDate = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(IntervalId);
    }, []);

    return currentDate;
}