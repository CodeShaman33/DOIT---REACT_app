import React from "react";
import { CheckBoxWrapper } from "./CheckBox.style";

const CheckBox = ({priority, taskChecked, ...props}) => {
    return (
        <CheckBoxWrapper {...props} priority={priority} className="check-box">
          <input type="checkbox" checked={taskChecked}/>
        </CheckBoxWrapper>
    )
}

export default CheckBox;