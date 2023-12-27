import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Row } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Boton from './components/Boton';
import RadioBoton from './components/RadioBoton';
import Spacer from './components/Spacer';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');
  const [ans, setAns] = useState('0');
  const [rtaEntregada, setRtaEntregada] = useState(true);
  const [deg, setDeg] = useState(true);

  const onClickInput = (val) => { 
    val = val.replace('x', '');
    if (rtaEntregada) { setRtaEntregada(false); setInput(val)}
    else { setInput(input + val) };
  };

  const onClickSpecialInput = (val) => { 
    if (rtaEntregada) { setRtaEntregada(false); setInput(val+'(')}
    else { setInput(input + val + '(') };
  };
  
  const mostrarRespuesta = () => { 
    if (!rtaEntregada) {
      try {
        if (deg) {
          setInput(evaluate(input.replaceAll('²', '^2').replaceAll('π', '(pi)').replaceAll('√', 'sqrt').replaceAll(/ln\(([^)]+)\)/g, 'log($1, e)').replaceAll(/log\(([^)]+)\)/g, 'log($1, 10)').replaceAll(/sin\(([^)]+)\)/g, 'sin($1 deg)').replaceAll(/cos\(([^)]+)\)/g, 'cos($1 deg)').replaceAll(/tan\(([^)]+)\)/g, 'tan($1 deg)')));
          setAns(evaluate(input.replaceAll('²', '^2').replaceAll('π', '(pi)').replaceAll('√', 'sqrt').replaceAll(/ln\(([^)]+)\)/g, 'log($1, e)').replaceAll(/log\(([^)]+)\)/g, 'log($1, 10)').replaceAll(/sin\(([^)]+)\)/g, 'sin($1 deg)').replaceAll(/cos\(([^)]+)\)/g, 'cos($1 deg)').replaceAll(/tan\(([^)]+)\)/g, 'tan($1 deg)'))); 
          setRtaEntregada(true);
        } else {
          setInput(evaluate(input.replaceAll('²', '^2').replaceAll('π', '(pi)').replaceAll('√', 'sqrt').replaceAll(/ln\(([^)]+)\)/g, 'log($1, e)').replaceAll(/log\(([^)]+)\)/g, 'log($1, 10)')));
          setAns(evaluate(input.replaceAll('²', '^2').replaceAll('π', '(pi)').replaceAll('√', 'sqrt').replaceAll(/ln\(([^)]+)\)/g, 'log($1, e)').replaceAll(/log\(([^)]+)\)/g, 'log($1, 10)'))); 
          setRtaEntregada(true);
        }
      } catch (error) {
        setInput("Error");
      }
    }
  };

  const mostrarAns = () => {
    if (rtaEntregada) {
      setInput(ans);
      setRtaEntregada(false);
    } else {
      setInput(input.toString() + ans);
    }
  }

  const despejarPantalla = () => {
    setInput('');
  }
  
  const despejarCaracter = () => {
    rtaEntregada ? setInput('') : setInput(input.slice(0, -1));
  }

  const toggleDeg = () => {
    setDeg(!deg);
  }

  return (
    <div className="App">
      <Navigation></Navigation>
      <div className='Container'>
        <div className='Calc-container'>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "1.5rem" }}>
            <Pantalla input={input} />
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "0.5rem"}}>
            <RadioBoton manejarClick={toggleDeg}></RadioBoton>
            <Spacer responsive={true}></Spacer>
            <Boton manejarClick={onClickInput} responsiveBtn={true} >x!</Boton>
            <Boton manejarClick={onClickInput} >(</Boton>
            <Boton manejarClick={onClickInput} >)</Boton>
            <Boton manejarClick={onClickInput} >%</Boton>
            <Boton manejarClick={despejarPantalla} specialBtn={true}>AC</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "0.5rem"}}>
            <Boton manejarClick={despejarCaracter} responsiveBtn={true} >C</Boton>
            <Boton manejarClick={onClickSpecialInput} responsiveBtn={true} >sin</Boton>
            <Boton manejarClick={onClickSpecialInput} responsiveBtn={true} >ln</Boton>
            <Boton manejarClick={onClickInput} >7</Boton>
            <Boton manejarClick={onClickInput} >8</Boton>
            <Boton manejarClick={onClickInput} >9</Boton>
            <Boton manejarClick={onClickInput} >/</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "0.5rem"}}>
            <Boton manejarClick={onClickInput} responsiveBtn={true} >π</Boton>
            <Boton manejarClick={onClickSpecialInput} responsiveBtn={true} >cos</Boton>
            <Boton manejarClick={onClickSpecialInput} responsiveBtn={true} >log</Boton>
            <Boton manejarClick={onClickInput} >4</Boton>
            <Boton manejarClick={onClickInput} >5</Boton>
            <Boton manejarClick={onClickInput} >6</Boton>
            <Boton manejarClick={onClickInput} >*</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "0.5rem"}}>
            <Boton manejarClick={onClickInput} responsiveBtn={true} >e</Boton>
            <Boton manejarClick={onClickSpecialInput} responsiveBtn={true} >tan</Boton>
            <Boton manejarClick={onClickSpecialInput} responsiveBtn={true} >√</Boton>
            <Boton manejarClick={onClickInput} >1</Boton>
            <Boton manejarClick={onClickInput} >2</Boton>
            <Boton manejarClick={onClickInput} >3</Boton>
            <Boton manejarClick={onClickInput} >-</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "0.5rem"}}>
            <Boton manejarClick={mostrarAns} responsiveBtn={true} >Ans</Boton>
            <Boton manejarClick={onClickInput} responsiveBtn={true} >^</Boton>
            <Boton manejarClick={onClickInput} responsiveBtn={true} >x²</Boton>
            <Boton manejarClick={onClickInput} >0</Boton>
            <Boton manejarClick={onClickInput} >.</Boton>
            <Boton manejarClick={mostrarRespuesta} specialBtn={true} >=</Boton>
            <Boton manejarClick={onClickInput} >+</Boton>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
