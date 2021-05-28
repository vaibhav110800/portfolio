import React from 'react';

import a from '../assets/images/a.JPG';
import b from '../assets/images/b.JPG';
import c from '../assets/images/c.JPG';

import Card from '../components/Card';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tour & Travel Website',
                    subTitle: 'SASS',
                    imgSrc: a,
                    link1: 'https://vaibhav110800.github.io/SASS_Proj/',
                    link2: 'https://github.com/vaibhav110800/SASS_Proj',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Blog Website',
                    subTitle: 'NODE, EJS',
                    imgSrc: b,
                    link1: 'https://vast-escarpment-21991.herokuapp.com/',
                    link2: 'https://github.com/vaibhav110800/Blog-Website',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Student Portal',
                    subTitle: 'NODE',
                    imgSrc: c,
                    link1: 'https://infinite-beyond-05519.herokuapp.com/',
                    link2: 'https://github.com/vaibhav110800/portal',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })

    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;