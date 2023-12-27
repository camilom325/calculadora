import React from 'react';
import { Col } from 'react-bootstrap';

const Spacer = (props) => {
    return (
        <Col md={1} className={props.responsive ? "d-none d-lg-block" : ""}>
            
        </Col>
    );
};

export default Spacer;