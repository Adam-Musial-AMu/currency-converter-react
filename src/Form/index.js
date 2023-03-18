import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import Result from "../Result";
import { currencies } from "../currencies";
import "./style.css";

const Form = ({ legendText }) => {
    return (
        <main>
            <form className="form">
                <fieldset className="form__fieldset">
                    <legend className="form__legend">
                        {legendText}
                    </legend>
                    <Input />
                    <Select currencies={currencies} />
                    <Button buttonText="Przelicz !" />
                    <Result />
                </fieldset>
            </form>
        </main>
    )
};

export default Form;