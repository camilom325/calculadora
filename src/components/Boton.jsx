import React from 'react';
import { Button, Col } from 'react-bootstrap';

function Boton(props) {

    return (
        <Col className={props.responsiveBtn ? "d-none d-lg-block" : ""}>
            <Button variant={props.specialBtn ? "outline-primary" : "outline-light"} onClick={() => props.manejarClick(props.children)} style={{width: "100%", height: "100%"}}>
                {props.children}
            </Button>{' '}
        </Col>
    );
}

export default Boton;