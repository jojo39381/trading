import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
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
    "width":"90%",
    "margin":"0 auto"
    
  
  }
  
  const CollectionContainerStyle = {
    "margin": "0 auto",
    "backgroundColor":"yellow"
  }


const BuyCard = () => {
    const [stockData, setStockData] = useState({
        ticker:"",
        quantity:0  
    })
    const handleOrder = async (side) => {
        const data = {
            symbol:stockData.ticker,
            qty:stockData.quantity,
            side:side,
            type:"market",
            time_in_force:"gtc"
        }
        const results = await axios.post('https://ly3beegx.brev.dev/api/orders', data)
        console.log(results)
    }
    const updateForm = (event, key) => {
        console.log({...stockData, [key]:event.target.value})
        setStockData({...stockData, [key]:event.target.value})
    }
    return (
        <div>   
           <div style={containerStyle}>
            <h2 style={{...formInputStyle, textAlign:"center"}}>Quick Buy</h2>
            <label htmlFor="formGroupExampleInput">Stock</label>
            <input style={formInputStyle} value={stockData.ticker} onChange={(e) => updateForm(e, "ticker")}></input>
            <label htmlFor="formGroupExampleInput">Quantity</label>
            <input style={formInputStyle} type="number" value={stockData.quantity} onChange={(e) => updateForm(e, "quantity")}></input>
            <p style={formInputStyle}>Estimated Cost $0.00</p>
            
            <Button style={buttonStyle} onClick={() => handleOrder("buy")}>Buy</Button>
            <Button style={buttonStyle} onClick={() => handleOrder("sell")}>Sell</Button>
            </div>
        </div>
    )
}

export default BuyCard
