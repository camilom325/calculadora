import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Row } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Boton from './components/Boton';
import RadioBoton from './components/RadioBoton';
import Spacer from './components/Spacer';
import Pantalla from './components/Pantalla';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className='Container'>
        <div className='Calc-container'>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "3vh" }}>
            <Pantalla/>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "1vh"}}>
            <RadioBoton></RadioBoton>
            <Spacer responsive={true}></Spacer>
            <Boton responsiveBtn={true} >x!</Boton>
            <Boton>(</Boton>
            <Boton>)</Boton>
            <Boton>%</Boton>
            <Boton specialBtn={true}>AC</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "1vh"}}>
            <Boton responsiveBtn={true} >Inv</Boton>
            <Boton responsiveBtn={true} >sin</Boton>
            <Boton responsiveBtn={true} >ln</Boton>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>/</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "1vh"}}>
            <Boton responsiveBtn={true} >π</Boton>
            <Boton responsiveBtn={true} >cos</Boton>
            <Boton responsiveBtn={true} >log</Boton>
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>*</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "1vh"}}>
            <Boton responsiveBtn={true} >e</Boton>
            <Boton responsiveBtn={true} >tan</Boton>
            <Boton responsiveBtn={true} >√</Boton>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>-</Boton>
          </Row>
          <Row style={{ paddingInline: "1.3vw", paddingBlock: "1vh"}}>
            <Boton responsiveBtn={true} >Ans</Boton>
            <Boton responsiveBtn={true} >Exp</Boton>
            <Boton responsiveBtn={true} >x²</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton specialBtn={true} >=</Boton>
            <Boton>+</Boton>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
