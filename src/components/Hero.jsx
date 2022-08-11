import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Hero.css';
import MovieCard from './MovieCard';

const Hero = ({ movies }) => {
    const random = Math.floor(Math.random() * movies.length);
    const firstMovie = movies[random];

    const movieItems = movies.map((movie, index) => (
        index === 0 ? <MovieCard key={movie.id} poster={movie.poster_path} margins={'ms-xs-2 ms-md-4 ms-lg-5'} /> : <MovieCard key={movie.id} poster={movie.poster_path} />
    ));

    return (
        <Container fluid className='hero d-flex flex-column'>
            <Container fluid className='flex-grow-1 p-0'>
                <Row className='h-100'>
                    <Col xs={12} md={7} xl={6}>
                        <Container fluid className='h-100 d-flex flex-column justify-content-center px-xs-2 px-md-4 px-lg-5'>
                            <h1 className=' display-1 lh-1 fw-bolder text-light'>{firstMovie.title}</h1>
                            <div className='d-flex gap-3 fs-6 fw-bold text-light my-4'>
                                <span className=''>{Number(firstMovie.vote_average) * 10}% Votes</span>
                                <span>{firstMovie.release_date.split('-')[0]}</span>
                            </div>
                            <div class="d-md-block">
                                <Button variant='danger' className='rounded-pill cta-btn me-3'>Play</Button>
                                <Button variant='outline-light' className='rounded-circle add-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                </Button>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <div>
                <Container fluid className="px-xs-2 px-md-4 px-lg-5 mb-3 fw-bold text-white">NOW PLAYING</Container>
                <Container fluid className="movie-container px-0 pb-2">
                    {movieItems}
                </Container>
            </div>
        </Container>
    );
}

export default Hero;
