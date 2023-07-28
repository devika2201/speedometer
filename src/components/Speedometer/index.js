import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {meter: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      console.log(`previous state value: ${prevState.meter}`)
      return {meter: prevState.meter + 10}
    })
  }

  onBrake = () => {
    this.setState(prevState => {
      console.log(`previous state value: ${prevState.meter}`)
      return {meter: prevState.meter - 10}
    })
  }

  render() {
    const {meter} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="
                https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading2">
          Speed is <span>{meter}</span>mph
        </h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="displayButton">
          <button className="button1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button2" type="button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
