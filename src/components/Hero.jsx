import React from 'react';
import Container from 'react-bootstrap/Container';

import './Hero.css';

const Hero = () => {
    return (
        <Container className='hero d-flex flex-column'>
            <Container className='flex-grow-1 bg-warning'>
                Hero text and call to actions
            </Container>
            <Container className='bg-primary'>
                Movie cards
            </Container>
        </Container>
    );
}

export default Hero;
