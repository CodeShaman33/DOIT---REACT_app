import React from 'react';
import Note from 'components/molecules/Note/Note';
// import { useSelector } from 'react-redux';
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.style';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;