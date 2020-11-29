import React from "react";

export default class FooterUtil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="footer-util">
                <div className="footer-util-center">
                    {this.props.children}
                </div>
            </div>
        );
    }
}