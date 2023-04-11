import React from "react";
import Note from "components/molecules/Note/Note";
import { Wrapper, FormWrapper, NotesWrapper } from "./Notes.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNote } from "store";
import { useState } from "react";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    dispatch(addNote({
        title: newTitle,
        content: newContent,
    }))
  }
  return ( 
    <Wrapper>
      {console.log(notes)}
      <FormWrapper as="form">
        <label htmlFor="title">title:</label>
        <input type="text" id="title" name="title" onChange={(e)=> setNewTitle(e.target.value)} />
        <label htmlFor="content">content:</label>
        <input type="text-area" name="content" id="content" onChange={(e)=> setNewContent(e.target.value)}/>
        <button type="submit" onClick={handleAddNote}>Add Note</button>
      </FormWrapper>
      <NotesWrapper>
        {console.log(notes)}
        {notes.length > 0 ? (
          notes.map(({ title, content, id }) => (
            <Note noteId={id} title={title} content={content} />
          ))
        ) : (
          <h2>no notes yet</h2>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
