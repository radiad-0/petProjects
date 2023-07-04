import React from 'react';
import './main.css'
import PoizonhubLogo from "../../shared/ui/PoizonhubLogo/PoizonhubLogo";
import {sizeEnum} from "../../shared/types/types";

const Main = () => {
    return (
        <div>
            <div className="fullscreen black">
                <PoizonhubLogo logoSize={sizeEnum.XLarge}/>
            </div>
            <div className="fullscreen blue"></div>
        </div>
    );
};

export default Main;