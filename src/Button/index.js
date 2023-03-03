import "./style.css";

const Button = ({ buttonText }) => {
    return (
        <p>
            <button type="submit" className="button">
                {buttonText}
            </button>
        </p>
    )
};

export default Button;