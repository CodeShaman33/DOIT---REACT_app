import styled from "styled-components";


export const  Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 10px;
`

export const FormWrapper = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 100%;
    height: 350px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
        width: 85%;
    }

    & label {
        margin-bottom: 10px;
        transform: translateX(-40px);
    }

    & input:first-of-type {
        margin-bottom: 40px;
    }

    & input:nth-of-type(2) {
        min-height: 60%;
    }

    & button {
        margin-top: 50px;
        align-content: center;
        text-align: center;
        left: 100px;
    }


`

export const NotesWrapper = styled.div`
    grid-column: 2;
    grid-row: 1 / 5;
    background-color: #93aba8;
    border-radius: 25px;
    display: flex;
    padding: 15px;
    flex-direction: column;


`