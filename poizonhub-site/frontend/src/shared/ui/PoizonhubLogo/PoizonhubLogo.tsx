import React, {FC} from 'react';
import classes from "./PoizonhubLogo.module.css";
import {PoizonhubLogoProps} from "../../types/types";

const PoizonhubLogo: FC<PoizonhubLogoProps> = (props) => {
    return (
        <div style={{fontSize: `${props.logoSize * 8}px`}}>
            <strong>Poizon</strong>
            <strong className={classes.hubLogoBlue}>hub</strong>
        </div>
    );
};

export default PoizonhubLogo;