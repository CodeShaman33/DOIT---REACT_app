import React from "react";
import Note from "components/molecules/Note/Note";
import { useSelector } from "react-redux";

import { NotesWrapper, WidgetHandler, Wrapper } from "./NotesWidget.style";

const NotesWidget = () => {
  const notes = useSelector((state) => state.notes);
  const [isOpen, setIsOpen] = React.useState(false);
  // const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
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

export default NotesWidget;
