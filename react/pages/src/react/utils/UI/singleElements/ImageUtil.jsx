import React from "react";

export default class ImageUtil extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.href === undefined){
            alert("Href is missing in ImageUtil. Err can occur.")
        }

        if(this.props.class === undefined){
            alert("Class is missing in ImageUtil. Err can occur.")
        }

        this.state = {
            href: this.props.href,
            clase: this.props.class
        };
    }

    render() {
        return (
          <div>
              <img src={this.props.href} className={this.state.class}></img>
          </div>
        );
    }
}