import React, {useState} from 'react';
import './Line.css'

function LIne(changeBackgroundColor) {


    return (
        <div className="changeBackgroundColor">
            <h3>Change Backgroung color</h3>
            <div className="changeColor">
                <span  className="colorOrange"></span>
                <span  className="colorRed"></span>
                <span  className="colorBlue"></span>
                <span  className="colorGreen"></span>
                <span  className="colorYello"></span>
                <span  className="colorViolet"></span>
            </div>
        </div>
    )
}

export default LIne
