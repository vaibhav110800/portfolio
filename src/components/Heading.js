import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../index.css';

function Heading(props) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-1">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="h hh1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h3 className="h hh2 font-weight-light">{props.subTitle}</h3>}
                        {props.text && <h3 className="h hh3 font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Heading;