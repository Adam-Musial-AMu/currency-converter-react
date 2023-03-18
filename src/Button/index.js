import "./style.css";

const Button = ({ buttonText }) => (
    <p>
        <button type="submit" className="button">
            {buttonText}
        </button>
    </p>
);

export default Button;