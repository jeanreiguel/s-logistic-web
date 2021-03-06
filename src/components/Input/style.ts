import styled, { css } from "styled-components";
import Tooltip from "../Tooltip/";


interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    hasError: boolean;
}
export  const Container = styled.div<ContainerProps>`
background: #232129;
border-radius: 10px;
border: 2px solid #232129;
width: 100%;
padding: 8px;
color: #666360;
border: 2px solid #232129;
color: #666360;
display: flex;
align-items: center;

    svg {
        margin-right: 16px;
    }
    & + div {
        margin-top: 8px;
    }

    ${(props) => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}
    ${(props) => props.isFilled && css`
        color: #ff9000;
    `}
    ${(props) => props.hasError && css`
        border-color: #c53030;
    `}
    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color:#666360;
        }
    }
`;
export const Error = styled(Tooltip)`

    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
          }
    }
    
`;