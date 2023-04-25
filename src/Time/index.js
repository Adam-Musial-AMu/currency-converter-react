import { Field } from "./styled";
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
        <Field>
            Dzisiaj jest
            {" "}
            {formatDate(currentDate)}
        </Field>
    )
};

export default Time;