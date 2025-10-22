const Props = (props) => {
  return (
    <div>
        <div className="pt-4 text-2xl">
            Hi {props.name}, you are {props.age} years old and you are {props.isStudent ? "a student" : "not a student"}.
        </div>
        <span>
            {props.children}
        </span>
    </div>
    
  );
};

export default Props;