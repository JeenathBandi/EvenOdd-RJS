// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    const a = Math.ceil(Math.random() * 100)
    console.log(a)
    const res = a + count
    return this.setState(prevState => ({count: res}))
  }

  isEvenOrOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count, isEven} = this.state
    const numberText = this.isEvenOrOdd()
    return (
      <div className="bg-container">
        <div className="even-odd-container">
          <h1 className="heading">Count {count}</h1>
          <div className="card-container">
            <p className="description">Count is {numberText}</p>
            <button onClick={this.onIncrement} className="btn">
              Increment
            </button>
            <p className="description-2">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
