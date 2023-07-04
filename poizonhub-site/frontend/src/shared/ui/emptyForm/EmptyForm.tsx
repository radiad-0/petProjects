import React, {FC} from 'react';
import classes from './EmptyForm.module.css'
import {FormProps} from "../../types/types";

const EmptyForm: FC<FormProps> = ({children}) => {
    return (
        <div className={classes.formContainer}>
            <form className={classes.form}>
                {children}
            </form>
        </div>
    );
};

export default EmptyForm;