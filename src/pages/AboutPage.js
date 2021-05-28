import React from 'react';

import SocialMedia from '../components/SocialMedia';
import Skills from '../components/Skills';
import Heading from '../components/Heading';
import AboutDesc from '../components/AboutDesc';

import aboutImg from '../assets/images/aboutImg.png'

function AboutPage(props) {

    return (
        <div>

            <Heading title={props.title} />
            <AboutDesc
                image={aboutImg}
                text={<p>
                    Creative and people-oriented Computer Science
                    undergraduate with adequate experience in programming languages like C,
                    C++ and Python. Knowledge of Web Designing and management of databases.
                    Open to learn new skills and gain experiences. <br /><br />

                    Innovative Front End Developer with experience in building and
                    maintaining responsive websites in the recruiting industry. Proficient
                    in HTML, CSS and Bootstrap. Learning and making websites using JS, Node and React, plus modern libraries and
                    frameworks.
                </p>}


            />

            <Skills />

            <div className="edu">
                <div className="edu-h">My Education</div>

                <div className="edu-inner">
                    <div className="edu-box">
                        <div className="edu-box-h1">JUIT / 7.6 CGPA</div>
                        <div className="edu-box-h2">2018 - 2022,  Btech</div>
                    </div>
                    <div className="edu-box">
                        <div className="edu-box-h1">Central Public School / 91.8% PCM</div>
                        <div className="edu-box-h2">2016 - 2018,  Senior Secondary School</div>
                    </div>
                    <div className="edu-box">
                        <div className="edu-box-h1">St. Paul Sr. Sec. School / 10 CGPA</div>
                        <div className="edu-box-h2">2014 - 2016,  secondary school</div>
                    </div>
                </div>

            </div>

            <SocialMedia />

        </div>
    );
}

export default AboutPage;