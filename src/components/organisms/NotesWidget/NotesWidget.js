import React, { useEffect } from "react";
import Note from "components/molecules/Note/Note";
import { useGetNotesQuery } from "store";
import { NotesWrapper, WidgetHandler, Wrapper } from "./NotesWidget.style";

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const {data, isLoading} = useGetNotesQuery();       
  useEffect(() =>{
    console.log(data);
  },[data])

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {isLoading ? <h2>Loading...</h2> : 
        <>
        {data.notes.length > 0 ? (
          data.notes.map(({ title, content, id }) => (
            <Note noteId={id} title={title} content={content} key={id}/>
          ))
        ) : (
          <h2>no notes yet</h2>
        )}
        </>
        }
        
        
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
