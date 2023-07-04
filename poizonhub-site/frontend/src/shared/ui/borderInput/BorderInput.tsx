import React, {FC} from 'react';
import {InputProps} from "../../types/types";
import classes from "./BorderInput.module.css";

const BorderInput: FC<InputProps> = (props) => {
    return (
        <input
            className={classes.borderInput}
            type={props.type || "text"}
            {...props}
        />
    );
};

export default BorderInput;