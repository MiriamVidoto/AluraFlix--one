import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
    background-color: #000000;
    min-height: 100vh;
`

function PageDefault({ children }) {
    return (
        <StyledPage>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </StyledPage>
    )
}

PageDefault.propTypes = {
    children: PropTypes.node.isRequired
}

export default PageDefault