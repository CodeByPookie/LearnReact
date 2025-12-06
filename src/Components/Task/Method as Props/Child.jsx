const Child = (prop) => {
    return (
        <div className="text-left">
            <div className="py-3"> 
                <label>Add User Name: </label>
                <input className="border-1 px-4"  type="text" placeholder="Enter Name" id="nameInput" />
            </div>
            <div className="py-3"> 
                <label>Add User Age: </label>
                <input className="border-1 px-4" type="number" placeholder="Enter Age" id="ageInput" />
            </div>            
           
            <button className="px-8 py-2 bg-green-900 text-white" onClick={() => prop.AddUser(document.getElementById("nameInput").value, parseInt(document.getElementById("ageInput").value))}>Add User</button>           
            
            <div className="my-5 border-1 p-3">
                {prop.userList.map((user, index) => (
                    <div key={index} className="flex gap-3 py-2">
                        <div>
                             Name: {user.name}, Age: {user.age}
                        </div>
                        <button className="px-4 py-1 bg-red-600 text-white" onClick={() => prop.RemoveUser(user.name)}>Remove User</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Child;