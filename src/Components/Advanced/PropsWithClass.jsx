import React from "react";

class PropsWithClass extends React.Component {
  render() {
    return (
        <div>
            <div className="pt-4 text-2xl">
              Hi {this.props.name}, you are {this.props.age} years old and you are {this.props.isStudent ? "a student" : "not a student"}.
            </div>
            <span>
                {this.props.children}
            </span>
        </div>     
    );
  }
}

export default PropsWithClass;
