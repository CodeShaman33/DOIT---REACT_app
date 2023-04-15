import React, { useEffect } from "react";
import { Wrapper, FormWrapper } from "./Notes.style";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addNote } from "store";
import { useState } from "react";
import { useAddNoteMutation } from "store";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  // const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [addNote, rest] = useAddNoteMutation();

  useEffect(() => {
    console.log(rest);
  },[rest])

  const handleAddNote = (e) => {
    e.preventDefault();
  
      addNote({
        title: newTitle,  
        content: newContent,
      })
    
  };
  return (
    <Wrapper>
      {console.log(notes)}
      <FormWrapper as="form">
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <label htmlFor="content">content:</label>
        <input
          type="text-area"
          name="content"
          id="content"
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button type="submit" onClick={handleAddNote}>
          Add Note
        </button>
      </FormWrapper>
 
    </Wrapper>
  );
};

export default Notes;
