import "./style.css";

const Time = ({ currentDate }) => (
    <p className="time">
        Dzisiaj jest&nbsp;
        {currentDate.toLocaleString(
            "pl", { month: "long", weekday: "long", day: "numeric" }
        )},&nbsp;
        {currentDate.toLocaleTimeString()}
    </p>
);

export default Time;