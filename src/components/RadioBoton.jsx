import { useState } from 'react';
import { Col } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function RadioBoton() {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Deg', value: '1' },
    { name: 'Rad', value: '2' }
  ];

    return (
      <Col className="d-none d-lg-block" style={{marginRight: "0.3vw"}}>
        <ButtonGroup style={{width: "155%"}}>
            {radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={'outline-light'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
                {radio.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
    </Col>
  )
}

export default RadioBoton;