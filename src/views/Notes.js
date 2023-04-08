import React from "react";
import styled from "styled-components";
import Note from "components/molecules/Note/Note";

const  Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 10px;
`

const FormWrapper = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 100%;
    height: 600px;
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

const NotesWrapper = styled.div`
    grid-column: 2;
    grid-row: 1 / 5;
    background-color: #93aba8;
    border-radius: 25px;
    display: flex;
    padding: 15px;
    flex-direction: column;


`

const Notes = () => {

    return (
        <Wrapper>
            <FormWrapper as='form'>
                <label htmlFor="title">title:</label>
                <input type="text" id="title" name="title" />
                <label htmlFor="content">content:</label>
                <input type="text-area" name="content" id="content"/>
                <button type="submit">Add Note</button>
            </FormWrapper>
            <NotesWrapper>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </NotesWrapper>
        </Wrapper>
    )
}


export default Notes;