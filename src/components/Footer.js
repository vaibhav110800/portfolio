import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../index.css';

function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-start footer-text">
                        Made with &#9829;
                    </Col>
                    <Col className="p-0 d-flex justify-content-end footer-text">
                        &#xa9;Vaibhav Thakur 2021
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;