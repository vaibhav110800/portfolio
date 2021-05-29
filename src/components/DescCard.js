import React from 'react';
import '../index.css';

function DescCard(props) {

    return (
        <div className="dsc-parent">
            <div className="dsc-img"><img src={props.image} alt="" /></div>
            <div className="dsc-h1">{props.title}</div>
            <div className="dsc-h2">{props.subTitle}</div>

            <div className="d-flex">
                <a href={props.dsclink1} target="_blank" rel="noopener noreferrer" className="an"><i className="fas fa-globe-africa ic"></i></a>
                <a href={props.dsclink2} target="_blank" rel="noopener noreferrer" className="an"><i className="fab fa-github ic"></i></a>
            </div>
        </div>
    );
}

export default DescCard;