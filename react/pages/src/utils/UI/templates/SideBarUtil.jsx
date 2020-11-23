import React from "react";

export default class SideBarUtil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    Hello
                </div>
                <div>
                    Test
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}