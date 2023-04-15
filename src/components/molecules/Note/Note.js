import React, {useEffect} from "react";
import { NoteWrapper } from "./Note.style";
// import { useDispatch } from "react-redux";
// import { removeNote } from "store";
import {useRemoveNoteMutation} from 'store'
const Note = ({title = 'untitled', content = 'no content', noteId}) => {
  // const dispatch = useDispatch(); 
  const [removeNote, rest] = useRemoveNoteMutation();

  useEffect(() => {
    console.log(rest);
  },[rest])


  const handleRemoveNote = () => {
    removeNote(noteId);
  }
  return (
    <NoteWrapper>
      <h2>{title}</h2>
      <p>
        {content}
      </p>
      <button onClick={handleRemoveNote}>delete note</button>
    </NoteWrapper>
  );
};

export default Note;
