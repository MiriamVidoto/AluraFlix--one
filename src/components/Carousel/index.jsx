import { styled } from "styled-components";
import PropTypes from 'prop-types';

const StyledCarousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
    
`;

const Carousel = ({ children }) => {
    return (
        <StyledCarousel>
            {children}
        </StyledCarousel>
    );
}

Carousel.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Carousel;