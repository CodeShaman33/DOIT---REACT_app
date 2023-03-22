import React from "react";
import { Wrapper } from "./MainTemplate.style.";
//components
import Navigation from "components/organisms/Navigation/Navigation";
import SearchBar from "components/organisms/SearchBar/SearchBar";


const MainTemplate = ({children}) => {

    return (
        <Wrapper>
            <Navigation />
            <SearchBar />
            {children}
        </Wrapper>
    )
}


export default MainTemplate;