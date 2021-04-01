import React from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

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
  
const StrategyCard = () => {
    return (
        <div style={containerStyle}>
        <h2 style={{textAlign:"center"}}>Choose from a strategy:</h2>
        <section style={{marginTop:20}}>
        <Row>
          <Col sm={4}>
            <Button style={strategyButtonStyle}>Conservative</Button>
          </Col>
          <Col sm={4}>
            <Button style={strategyButtonStyle}>Moderate</Button>
          </Col>
          <Col sm={4}>
          <Button style={strategyButtonStyle}>Aggresive</Button>
          </Col>
        </Row>
        </section>
        <section style={{marginTop:50}}>
        <Row>
            <Col sm={6}>
                <Button style={strategyButtonStyle}>Start</Button>
            </Col>
            <Col sm={6}>
            <Button style={strategyButtonStyle}>Stop</Button>
            </Col>
        </Row>
        </section>
        </div>
    )
}

export default StrategyCard
