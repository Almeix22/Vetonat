
import React from 'react';
import {Carousel} from 'react-bootstrap';

function Carousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../../public/img/acceuil/chat_acceuil2.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../../public/img/acceuil/chat_acceuil3.png"
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}


export default Carousels;
