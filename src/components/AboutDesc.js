import React from 'react';
import '../index.css';

function AboutDesc(props) {

    return (
        <div className="abt-parent">
            <div className="abt-left"><img className="abt-img" src={props.image} alt="" /></div>

            <div className="abt-right">
                <div className="abt-right-inner">{props.text}</div>
            </div>
        </div>
    );
}

export default AboutDesc;