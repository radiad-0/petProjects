import React, {FC} from 'react';
import classes from "./BlueButton.module.css";
import {ButtonProps} from "../../types/types";

const BlueButton: FC<ButtonProps> = (props) => {
    return (
        <button className={classes.blueButton} {...props}/>
    );
};

export default BlueButton;