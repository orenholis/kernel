import React from "react";

export default class FlexPanelUtil extends React.Component {
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
            <div className="flex-util">
                {this.props.children}
            </div>
        );
    }
}