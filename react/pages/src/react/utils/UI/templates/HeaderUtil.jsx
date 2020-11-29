import React from "react";

export default class HeaderUtil extends React.Component {
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
            <div className="header-util">
                <div className="header-util-center">
                    {this.props.children}
                </div>
            </div>
        );
    }
}