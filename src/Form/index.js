import "./style.css";

const Form = (props) => (
    <form className="form">
        {props.children}
    </form>
);

export default Form;