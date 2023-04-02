import React from "react";
import { CheckBoxWrapper } from "./CheckBox.style";

const CheckBox = ({priority}) => {
    console.log(priority);
    return (
        <CheckBoxWrapper priority={priority} className="check-box">
          <input type="checkbox" />
        </CheckBoxWrapper>
    )
}

export default CheckBox;