import "./style.css";

const Footer = ({ finalText }) => {
    return (
        <footer className="footer">
            <p className="footer__finalText">{finalText}</p>
        </footer>
    )
};

export default Footer;
