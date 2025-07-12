import React from 'react'

function FunctionClick() {
    function Clickme() {
        console.log("Button clicked")
    }
    function SayHi(message) {
        console.log(message + " User")
    }
  return (
    <div>
        <div className='space-x-3'>
            <button className='btn bg-red-500 text-white p-3 hover:bg-black cursor-pointer' onClick={Clickme}>
                Click Me
            </button>
            <button className='btn bg-red-500 text-white p-3 hover:bg-black cursor-pointer' onClick={() => {SayHi("Hello")}}>
                Click Me
            </button>
        </div>       
    </div>
  )
}

export default FunctionClick