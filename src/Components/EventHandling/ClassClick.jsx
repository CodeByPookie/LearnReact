import React, { Component } from 'react'

class ClassClick extends Component {
  Clickme() {
    console.log("Button clicked");
    var resultDiv = document.querySelector('.ResultDiv');
    resultDiv.innerHTML = "Button clicked - Event handled in Class Component";
  }
  SayHi(message) {
    console.log(message + " User");
    var resultDiv = document.querySelector('.ResultDiv');
    resultDiv.innerHTML = message + " User - Event handled in Class Component";
  }
  reset() {
    var resultDiv = document.querySelector('.ResultDiv');
    resultDiv.innerHTML = "";
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
          <button className='btn bg-red-500 text-white p-3 hover:bg-black cursor-pointer' onClick={this.reset}>
            Reset
          </button>
        </div>
        <div className='ResultDiv'>
            {/* Result will be displayed here */}
        </div>
      </div>
    )
  }
}
export default ClassClick