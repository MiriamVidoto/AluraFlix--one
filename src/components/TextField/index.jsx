import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTextField = styled.input`
    background-color: #53585D;
    color: #F5F5F5;
    border: 1px solid #53585D;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
`;

const TextField = ({ placeholder }) => {
    return (
        <StyledTextField placeholder={placeholder} />
    );
}

TextField.propTypes = {
    placeholder: PropTypes.string,
};

TextField.defaultProps = {
    placeholder: 'Type here...',
};

export default TextField;