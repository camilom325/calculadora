import React from 'react';
import { Col } from 'react-bootstrap';
import '../styles/Pantalla.css'

const Pantalla = ( {input} ) => {
    return (
        <Col>
            <div className='input'>
                {input}
            </div>
        </Col>
    );
};

export default Pantalla;