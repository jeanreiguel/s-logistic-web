import styled from "styled-components";

export  const Container = styled.div`
background: #232129;
border-radius: 10px;
border: 2px solid #232129;
width: 100%;
padding: 8px;
color: #666360;

display: flex;
align-items: center;

    svg {
        margin-right: 16px;
    }
    & + div {
        margin-top: 8px;
    }
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