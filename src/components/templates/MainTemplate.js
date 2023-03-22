import React from "react";
import { Wrapper } from "./MainTemplate.style"
//components
import Navigation from "components/organisms/Navigation/Navigation";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import NotesSection from "components/organisms/NotesSection/NotesSection";


const MainTemplate = ({children}) => {

    return (
        <Wrapper>
            <Navigation />
            <SearchBar />
            {children}
            <NotesSection />
        </Wrapper>
    )
}


export default MainTemplate;