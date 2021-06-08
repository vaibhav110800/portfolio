import React from 'react';

import { SiMongodb } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

import '../index.css';

function Skills(props) {

    return (
        <div className="skl">
            <div className="skl-h">My Skills</div>

            <div className="skl-inner">

                <div className="skl-box">
                    <div className="skl-icon"><i class="fab fa-html5"></i></div>
                    <div className="skl-text">HTML</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><i class="fab fa-css3-alt"></i></div>
                    <div className="skl-text">CSS</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><i class="fab fa-bootstrap"></i></div>
                    <div className="skl-text">Bootstrap</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><i class="fab fa-sass"></i></div>
                    <div className="skl-text">SASS</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><i class="fab fa-js-square"></i></div>
                    <div className="skl-text">JavaScript</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><i class="fab fa-node-js"></i></div>
                    <div className="skl-text">Node JS</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><i class="fab fa-react"></i></div>
                    <div className="skl-text">React</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><SiMongodb /></div>
                    <div className="skl-text">Mongo DB</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><FaDatabase /></div>
                    <div className="skl-text">SQL</div>
                </div>

                <div className="skl-box">
                    <div className="skl-icon"><i class="fas fa-code-branch"></i></div>
                    <div className="skl-text">GIT</div>
                </div>

            </div>
        </div>
    );
}

export default Skills;