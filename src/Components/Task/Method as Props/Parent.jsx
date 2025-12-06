import React from 'react'
import Child from './Child';
import { Link } from 'react-router-dom';

function Parent() {
    const [userList, setUserList] = React.useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Diana", age: 28 },
        { name: "Ethan", age: 32 }
    ]);

    const [statusMessage, setStatusMessage] = React.useState("Status Messages will appear here");

    const AddUser = (name, age) => {
        if (!name || !age) {
            setStatusMessage("Please provide both name and age.");
            return;
        }    
        if (userList.some(user => user.name === name)) {
            setStatusMessage("User already exists.");
            return;
        }
        if (age <= 0 || age > 100) {
            setStatusMessage("Please provide a valid age.");
            return;
        }    
        setUserList([...userList, { name, age }]); 
        setStatusMessage("User Added");
    };

    const RemoveUser = (name) => {
        setUserList(userList.filter(user => user.name !== name)); 
        setStatusMessage("User Removed");
    };

    return (
        <div>
            <h3 className='bg-blue-400 text-white p-3 text-2xl'>{statusMessage}</h3>
            {/* Passing Method as Prop */}
            <Child AddUser={AddUser} RemoveUser={RemoveUser} userList={userList} />   
            <div>
                 <Link to="/" className='text-white bg-[#007bff] py-2 px-[15px] rounded-lg no-underline'>
                    Back to Home
              </Link> 
            </div>
                
        </div>
    );
}

export default Parent;
