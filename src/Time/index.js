import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

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

    const currentDate = useCurrentDate();

    return (
        <p className="time">
            Dzisiaj jest
            {" "}
            {formatDate(currentDate)}
        </p>
    )
};

export default Time;