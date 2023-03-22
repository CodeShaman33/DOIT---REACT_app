import React from "react";
import { Wrapper } from "./MainTemplate.style.";
//components
import Navigation from "components/organisms/Navigation/Navigation";


const MainTemplate = ({children}) => {

    return (
        <Wrapper>
            <Navigation />
            {children}
        </Wrapper>
    )
}


export default MainTemplate;