

const Button = ({buttonText}) => {
    return (
        <p>
            <button type="submit" className="form__button form__button--submit">
                {buttonText}
            </button>
        </p>
    )
};

export default Button;