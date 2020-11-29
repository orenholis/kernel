import React from "react";

export default class MiddleUtil extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.children === undefined){
            alert("Childern is missing element will be empty");
        }

        this.state = {

        };
    }

    render() {
        return (
            <div className="middle-panel-util">
                {this.props.children}
            </div>
        );
    }
}