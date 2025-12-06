import React, { Component } from 'react'

class Eventbinding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello User"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: "Thanks for Visiting"
        })
    }
    clickHandlerArrow = () => {
        this.setState({
            message: "Thanks for Visiting"
        })
    }
  render() {    
    return (
      <div>
        <div>{this.state.message}</div>
        <div className='flex gap-4 justify-center mt-4'>
            
            {/* Method 01 - Binding Inside Render --> not recommended */}        
            <button onClick={this.clickHandler.bind(this)} className='cursor-pointer px-4 py-2 text-white bg-black hover:bg-red-600'>Click me</button>
        
            {/* Method 02 - Arrow Function in JSX --> not recommended for large applications */}    
            <button onClick={() => this.clickHandler()} className='cursor-pointer px-4 py-2 text-white bg-black hover:bg-red-600'>Click me</button>
        
            {/* Method 03 - Class Property as Arrow Function --> Recommended */}    
            <button onClick={this.clickHandlerArrow} className='cursor-pointer px-4 py-2 text-white bg-black hover:bg-red-600'>Click me</button>
      
            {/* Method 04 - Binding in Constructor --> Recommended */}    
            <button onClick={this.clickHandler} className='cursor-pointer px-4 py-2 text-white bg-black hover:bg-red-600'>Click me</button>
      
        </div>
        <button onClick={() => this.setState({message: "Hello User"})} className='mt-4 cursor-pointer px-4 py-2 text-white bg-green-600 hover:bg-green-800'>Reset</button>
      </div>
    )
  }
}

export default Eventbinding