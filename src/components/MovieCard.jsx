import React from 'react';
import Card from 'react-bootstrap/Card';

import './MovieCard.css';

const MovieCard = ({ poster, margins }) => {
    return (
        <Card className={"bg-dark text-white d-inline-block card "+margins}>
            <Card.Img className='' src={"https://image.tmdb.org/t/p/original"+poster} alt="Card image" />
        </Card>
    );
}

export default MovieCard;
