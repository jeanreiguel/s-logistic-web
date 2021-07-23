import styled from 'styled-components'

import background from '../../assets/back1.jpg'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;

            &:hover {
                color: #feede850;
                transition: 0.2s;
            }
        }

    }
    > a {
        color: #ff9000;
        margin-top: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: #ff900095;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${ background }) no-repeat center;
    background-size: cover;
`;