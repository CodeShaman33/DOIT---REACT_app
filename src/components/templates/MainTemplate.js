import React from "react";
import { Wrapper } from "./MainTemplate.style";
//components
import Navigation from "components/organisms/Navigation/Navigation";
import NotesSection from "components/organisms/NotesSection/NotesSection";
import NotesWidget from "components/organisms/NotesWidget/NotesWidget";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
      <NotesSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
