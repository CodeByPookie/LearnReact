// import React from 'react'
const Destructuring = (props) => {
    const { name, age } = props;
    return (
        <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        </div>
    );
};

// const Destructuring = ({ name, age }) => {
//     return (
//         <div>
//         <h2>Name: {name}</h2>
//         <p>Age: {age}</p>
//         </div>
//     );
// };

// function Destructuring({ name, age }) {
//   return (
//     <div>
//       <h2>Name: {name}</h2>
//       <p>Age: {age}</p>
//     </div>
//   )
// }

export default Destructuring