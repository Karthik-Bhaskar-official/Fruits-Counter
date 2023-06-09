// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => {
      console.log(`Previous State of Mango ${prevState.mango}`)
      return {mango: prevState.mango + 1}
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log(`Previous State of Banana ${prevState.banana}`)
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="mango">{mango}</span> mangoes{' '}
            <span className="banana">{banana}</span> bananas
          </h1>
          <div className="mini-container">
            <div className="main-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.eatMango}>Eat Mango</button>
            </div>

            <div className="main-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.eatBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
