import React from "react";

export default class FooterUtil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                {this.props.type ?
                    <div className={"footer-util-" + this.props.type}>
                        <div className="footer-util-center">
                            {this.props.children}
                        </div>
                    </div> :
                    <div className="footer-util-absolute">
                        <div className="footer-util-center">
                            {this.props.children}
                        </div>
                    </div>
                }
            </div>
        );
    }
}