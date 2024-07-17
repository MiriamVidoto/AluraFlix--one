import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    width: 180px;
    height: 54px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;

    ${props => props.selected && `
        background: #000000;
        border: 2px solid #2271D1;
        box-shadow: 0px 0px 12px 4px #2271D1 inset;
        color: #2271D1;
    `}

    ${props => props.save && `
    border: 3px solid #2271D1;
    color: #FFFFFF;
    `}

    ${props => props.clean && `
    background: #FFFFFF;
    border: 2px solid #F5F5F5;
    color: #2271D1;
    `}
`;

const Button = ({ children, selected = false, save = false, clean = false }) => {
    return (
        <StyledButton selected={selected} save={save} clean={clean} >
            {children}
        </StyledButton>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    selected: PropTypes.bool,
    save: PropTypes.bool,
    clean: PropTypes.bool,
};

export default Button;