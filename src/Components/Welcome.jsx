import React from 'react';
import Greet from "./Greet";

class Welcome extends React.Component {
  render() {
    return (
        <div>
             <div className="text-2xl">
                come from Class Component - welcome file
            </div>
            <Greet />
        </div>    
    )
  }
}

export default Welcome;
