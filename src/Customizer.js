import React, {useState} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
const formInputStyle = {
    "display":"block",
    "marginBottom":20,
    "width":"100%",
  }
const Customizer = () => {
    const [customParams, setCustomParams] = useState({
        profitMargin: 0.1,
        stockCategory:"Tech"
    })
    const updateParams = (event, key) => {
        setCustomParams({...customParams, [key]:event.target.value})
    }
    return (
        <div>
            <label htmlFor="formGroupExampleInput">Stock Category (Which Stocks To Track?)</label>
            <select style={formInputStyle} className="browser-default custom-select">
                <option>Choose your category</option>
                <option value="1">Tech</option>
                <option value="2">Retail</option>
                <option value="3">Agriculture</option>
                <option value="3">Oil</option>
                <option value="3">Food</option>
                <option value="3">Fortune 100</option>
                <option value="3">S&P 500</option>
            </select>
            <label htmlFor="formGroupExampleInput">Trading Intensity</label>
            <select style={formInputStyle} className="browser-default custom-select">
                <option>Choose the intensity</option>
                <option value="1">Long Trades (1 - 2/wk)</option>
                <option value="2">Casual Trades (5 - 10/wk)</option>
                <option value="3">Day Trades (10 - 20/wk)</option>
            </select>
            <label htmlFor="formGroupExampleInput">Risk Tolerance</label>
            <select style={formInputStyle} className="browser-default custom-select">
                <option>Choose the tolerance</option>
                <option value="1">Safe (Low Volatility)</option>
                <option value="2">Moderate (Low - Med Volatility)</option>
                <option value="3">Aggresive (High Volatility)</option>
            </select>
            <label htmlFor="formGroupExampleInput">Profit Margin: {customParams.profitMargin}%</label>
            <input style={formInputStyle} type="range" value={customParams.profitMargin} onChange={(e) => updateParams(e, "profitMargin")} min={0.2} max={3} step={0.2}></input>
        </div>
    )
}

export default Customizer
