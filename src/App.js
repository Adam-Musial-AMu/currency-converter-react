import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

function App() {

    return (
        <body className="body">
            <Header title="Przelicznik walut" />
            <Form legendText="Wpisz kwotę i walutę" />
            <Footer finalText="Dziękuję za skorzystanie z mojego kalkulatora !" />
        </body>
    )
};

export default App;
