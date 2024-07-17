import { styled } from "styled-components"
import CategoryTitle from "../CategoryTitle"

const StyledBanner = styled.div`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 532px;

    img{
        width: 400px;
        margin: 40px;   
    }
`
const StyledContent = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 50px;
`

const Banner = () => {
    return (
    <StyledBanner $backgroundImage="src/assets/banner.png">
        <StyledContent>
            <StyledInfo>
                <CategoryTitle title="FRONT END" backgroundColor="#6BD1FF"/>
                <h3>SEO com React</h3>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex! </p>
            </StyledInfo>
            <img src="src/assets/banner.png" alt="" />
        </StyledContent>
    </StyledBanner>
    )
}

export default Banner