import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minval:1,
            count: 1,
        }
    }
    changeQty(amount) {
        this.setState((prevState) => ({
            count: prevState.count + amount < this.state.minval ? this.state.minval : prevState.count + amount
        }))
    }

  render() {    
    return (
      <div>
        <button id='decrementButton' className='border p-3 text-white bg-black cursor-pointer' onClick={() => this.changeQty(-1)}>-</button>
        <input type="text" id='qtySelector' value={this.state.count} readOnly className='border text-center p-2' />
        <button id='incrementButton' className='border p-3 text-white bg-black cursor-pointer' onClick={() => this.changeQty(1)}>+</button>
      </div>
    )
  }
}

export default Counter