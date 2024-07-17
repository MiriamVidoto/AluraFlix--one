import { styled } from "styled-components";

const StyledFooter = styled.footer`
    background-color: #282c34;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    /* position: fixed;
    bottom: 0; */
    width: 100%;

    img {
        width: 100px;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 5px;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <img src="src/assets/Logo.png" alt="Logo AluraFlix" />
            <span>
                &copy; 2024 - AluraFlix - Desenvolvido por
                <a href="   https://www.linkedin.com/in/miriam-vidoto/" target="_blank" rel="noreferrer">
                    Miriam Vidoto
                </a>
            </span>
        </StyledFooter>
    );
}

export default Footer;
