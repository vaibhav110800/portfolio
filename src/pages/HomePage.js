import React from 'react';

import Heading from '../components/Heading';
import Carousel from '../components/Carousel';
import DescCard from '../components/DescCard';

import meec from '../assets/images/meec.JPG';
import kanris from '../assets/images/kanris.JPG';
import codilytics from '../assets/images/codilytics.JPG';
import rideon from '../assets/images/rideon.JPG';

function HomePage(props) {

    return (
        <div>
            <Heading title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />

            <Heading subTitle="My Experience" text="Designed and Built these Websites" />

            <div className="dsc-holder">
                <DescCard image={rideon} title="RIDEON" subTitle="Freelance" dsclink1="https://www.rdautolights.com" dsclink2="https://github.com/aankushh/rd-autolights" />
                <DescCard image={codilytics} title="Codilytics" subTitle="Freelance" dsclink1="https://www.codilytics.com" dsclink2="https://github.com/codilyticsbitm/Codilytics" />
                <DescCard image={kanris} title="KANRIS Infotech" subTitle="Front End Intern" dsclink1="https://vaibhav110800.github.io/kanrisProject2" dsclink2="https://github.com/vaibhav110800/kanrisProject2" />
                <DescCard image={meec} title="MEEC Online Learning" subTitle="Front End Intern" dsclink1="https://vaibhav110800.github.io/MEEC.github.io" dsclink2="https://github.com/vaibhav110800/MEEC.github.io" />
            </div>

        </div>
    );
}

export default HomePage;