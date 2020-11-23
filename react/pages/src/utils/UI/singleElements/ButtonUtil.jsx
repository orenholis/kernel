import React from "react";
import Button from "@material-ui/core/Button";

export default class ButtonUtil extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.text === undefined){
            console.log("Some text expected for ButtonUtil.")
        }

        if(this.props.function === undefined){
            console.log("Some function expected for ButtonUtil.")
        }

        this.state = {
            color: this.props.color ? this.props.color : "primary",
            text: this.props.text ? this.props.text : "Insert your text",
            function: this.props.function ? this.props.function : this.null(),
            size: this.props.size ? this.props.size : "medium",
            variant: this.props.variant ? this.props.variant : "outlined"
        }
    }

    null(){
        return;
    }

    render() {
        return (
                <Button onClick={this.state.function} color={this.state.color} size={this.state.size} variant={this.state.variant}>
                    {this.state.text}
                </Button>
        );
    }
}