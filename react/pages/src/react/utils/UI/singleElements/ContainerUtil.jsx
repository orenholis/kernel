import React from "react";
import classNames from 'classnames';

export default class ContainerUtil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: this.props.mode,
            class: classNames(this.props.class, "container-util")
        };
    }

    render() {
        return (
            <div className={this.state.class}>
                {this.state.mode === "title" ?
                    modeTitle(this.props.children) :
                    null
                }
                {this.state.mode === undefined ?
                    this.props.children :
                    null
                }
            </div>
        );
    }
}

function modeTitle(props){
    return(
        <div>
            <h1 className="container-util-title">{props}</h1>
        </div>
    )
}