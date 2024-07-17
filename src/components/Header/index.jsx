import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";

const StyledHeader = styled.header`
    background-color: #282c34;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 10px;
    }
    
    img {
        max-width: 120px;
        padding: 10px;
        margin-left: 20px;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src="src/assets/Logo.png" alt="Logo AluraFlix"/>
            <nav>
                <Link to={"/"}><Button selected>Home</Button></Link>
                <Link to={"/novo-video"}><Button>Novo vídeo</Button></Link>
            </nav>
        </StyledHeader>
    );
};

export default Header;