import styled from "styled-components";


export const Wrapper = styled.div`

`;


export const FormWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px;
        border: 1px solid black;

        & *{
            margin-bottom: 20px;
        }
    }
`;


