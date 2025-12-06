import React from 'react'

function FunctionClick() {
    function Clickme() {
        console.log("Button clicked");
        var resultDiv = document.querySelector('.Resultdiv_fun');
        resultDiv.innerHTML = "Button clicked - Event handled in Functional Component";
    }
    function SayHi(message) {
        console.log(message + " User");
        var resultDiv = document.querySelector('.Resultdiv_fun');
        resultDiv.innerHTML = message + " User - Event handled in Functional Component";
    }
    const hideresult = () => {
        var resultDiv = document.querySelector('.Resultdiv_fun');
        resultDiv.innerHTML = "";
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
            <button className='btn bg-red-500 text-white p-3 hover:bg-black cursor-pointer' onClick={hideresult}>
                Hide 
            </button>
        </div> 
        <div className='Resultdiv_fun'>
        </div>      
    </div>
  )
}

export default FunctionClick