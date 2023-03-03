import "./style.css";

const Container = (props) => (
    <main>
        <div className="container">
            {props.children}
        </div>
    </main>
);

export default Container;