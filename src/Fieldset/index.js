

const Fieldset = ({title, input, select}) => {
    return (
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                {title}
            </legend>
            {input}
            {select}
        </fieldset>
    )
}

export default Fieldset;