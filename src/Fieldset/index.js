import "./style.css";

const Fieldset = ({ title, input, select }) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset__legend">
                {title}
            </legend>
            {input}
            {select}
        </fieldset>
    )
}

export default Fieldset;