const CallUser = (props) =>{
    return(
    <div>
        <div>Hi {props.name}, Welcome to the React world!</div>
        <div>Name: {props.name} </div>
        <div>Role : {props.role} </div>
        <div>Location: {props.location} </div>
    </div>
    );
}
export default CallUser;