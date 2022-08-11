import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Hero.css';

const Hero = () => {
    return (
        <Container className='hero d-flex flex-column'>
            <Container className='flex-grow-1 bg-warning p-0'>
            <Row className='h-100'>
                <Col xs={12} md={7} xl={6}>
                    <Container className='bg-success h-100 d-flex align-items-center'>
                        <h1 className='display-1 bolder'>Thor: Love and Thunder</h1>
                    </Container>
                </Col>
            </Row>
            </Container>
            <Container className='bg-primary'>
                Movie cards
            </Container>
        </Container>
    );
}

export default Hero;
