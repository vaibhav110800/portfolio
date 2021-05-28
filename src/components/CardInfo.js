import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <div className="d-flex ">
                <a href={props.link1} target="_blank" rel="noopener noreferrer" className="an"><i class="fas fa-globe-africa ic"></i></a>
                <a href={props.link2} target="_blank" rel="noopener noreferrer" className="an"><i class="fab fa-github ic"></i></a>
            </div>

        </animated.div>
    );
}

export default CardInfo;