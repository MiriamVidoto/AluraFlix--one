import { styled } from "styled-components"
import PropTypes from 'prop-types';

const StyledCategoryTitle = styled.h2`
    color: #ffffff;
    padding: 5px;
    width: 270px;
    height: 40px;
    font-family: Roboto;
    font-weight: 800;
    font-size: 32px;
    text-align: center;
    border-radius: 15px;
    background-color: ${props => props.backgroundColor};
    margin: 20px;
`;


const CategoryTitle = ({ backgroundColor, title }) => {
    return (
        <StyledCategoryTitle backgroundColor={backgroundColor}>
            {title}
        </StyledCategoryTitle>
    )
}

CategoryTitle.propTypes = {
    backgroundColor: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default CategoryTitle;