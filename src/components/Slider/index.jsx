import { styled } from "styled-components";
import PropTypes from 'prop-types';

const StyledSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const Slider = ({ children }) => {
    return (
        <StyledSlider>
            {children}
        </StyledSlider>
    );
}

Slider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Slider;

