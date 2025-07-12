import React, { Component } from 'react'

class ClassClick extends Component {
  Clickme() {
    console.log("Button clicked")
  }
  SayHi(message) {
    console.log(message + " User")
  }
  render() {
    return (
      <div>
        <div className='space-x-3 mt-5'>
          <button className='btn bg-red-500 text-white p-3 hover:bg-black cursor-pointer' onClick={this.Clickme}>
            Click Me
          </button>
          <button className='btn bg-red-500 text-white p-3 hover:bg-black cursor-pointer' onClick={() => {this.SayHi("Hello")}}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}
export default ClassClick