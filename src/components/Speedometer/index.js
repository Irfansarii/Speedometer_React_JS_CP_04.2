import {Component} from 'react'
import './index.css'

class Speedometer extends Component{
  state = {count: 0}
  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }
  onApplyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <button className="Accelerate" onClick={this.onAccelerate}>
          Accelerate
        </button>
        <button className="ApplyBrake" onClick={this.onApplyBrake}>
          Apply Brake
        </button>
      </div>
    )
  }
}
export default Speedometer
