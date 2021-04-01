import react, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BuyCard from './BuyCard'
import StrategyCard from './StrategyCard'
import LineGraph from './LineGraph'
import Customizer from './Customizer'
const formInputStyle = {
  "display":"block",
  "marginBottom":20,
  "width":"100%",
}
const buttonStyle = {
  "display":"block",
  "marginBottom":20,
  "width":"100%"
}

const strategyButtonStyle = {
 
  "width":"100%"
}

const containerStyle = {
  "width":"80%",
  "margin":"0 auto"
  

}

const CollectionContainerStyle = {
  "margin": "0 auto",
  "backgroundColor":"yellow"
}
const defaultData = {
  labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  datasets: [
    {
        label:"Revenue ($)",
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'rgb(62, 94, 210)',
        borderColor: 'rgba(62, 94, 210, 0.5)',
        borderWidth: 2,
        data: [1,2,3,4,5,6,7]
    }
  ]
}



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joseph's Trading Platform</h1>
      </header>
      <section style={{marginTop:30}}>
      <Row>
        <Col sm={8}>
          <LineGraph data={defaultData} graphTitle={"Profit"}/>
        </Col>
        <Col sm={4}>
          <BuyCard />
          <div>
            <h2>Positions</h2>
            <p>Microsoft 20</p>
          </div>
        </Col>
      </Row>
      </section>
      <section style={{marginTop:30}}>
      <Row>
        <Col sm={8}>
          <StrategyCard />
        </Col>
        <Col sm={4}>
          <Customizer></Customizer>
        </Col>
      </Row>
      </section>
      <section style={{marginTop:30}}>
      <Row>
        <Col sm={8}>

        </Col>
      </Row>
      </section>
    </div>
  );
}

export default App;
