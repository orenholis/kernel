import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class DialogUtil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            onChange: this.props.onChange,
            item: {
                value1: this.props.value1 ? this.props.value1 : "",
                value2: this.props.value2 ? this.props.value2 : "",
                value3: this.props.value3 ? this.props.value3 : "",
                value4: this.props.value4 ? this.props.value4 : "",
                value5: this.props.value5 ? this.props.value5 : "",
                value6: this.props.value6 ? this.props.value6 : "",
            },
            displayName: {
                name1: this.props.name1 ? this.props.name1 : "",
                name2: this.props.name2 ? this.props.name2 : "",
                name3: this.props.name3 ? this.props.name3 : "",
                name4: this.props.name4 ? this.props.name4 : "",
                name5: this.props.name5 ? this.props.name5 : "",
                name6: this.props.name6 ? this.props.name6 : "",
            },
            title: this.props.title,
            cancelButton: this.props.cancelButton !== false,
            endButton: this.props.endButton,
            cancelButtonFunction: this.props.cancelButtonFunction ? this.props.cancelButtonFunction : null
        };

        this.handleChange = this.itemValueChange.bind(this);
        this.openForm = this.openLoginForm.bind(this);
        this.closeForm = this.closeLoginForm.bind(this);
        this.valueSend = this.sendUserInformations.bind(this);
    }

    openLoginForm(){
        this.setState({status: true});
    }

    closeLoginForm(){
        if(this.state.cancelButtonFunction){
            this.state.cancelButtonFunction();
        }
        this.setState({status: false});
    }

    itemValueChange(e){
        const hodnota = e.target.value;
        const name = e.target.getAttribute("name");
        let celyItem = this.state.item;
        celyItem[name] = hodnota;
        this.setState({item: celyItem});
    }

    sendUserInformations(e){
        const data = {
            [this.state.displayName.name1 ? this.state.displayName.name1 : null]: this.state.item.value1,
            [this.state.displayName.name2 ? this.state.displayName.name2 : null]: this.state.item.value2,
            [this.state.displayName.name3 ? this.state.displayName.name3 : null]: this.state.item.value3,
            [this.state.displayName.name4 ? this.state.displayName.name4 : null]: this.state.item.value4,
            [this.state.displayName.name5 ? this.state.displayName.name5 : null]: this.state.item.value5,
            [this.state.displayName.name6 ? this.state.displayName.name6 : null]: this.state.item.value6,
        };
        this.state.onChange(data);
        this.setState({status: false});
    };

    render() {
        return (
            <div>
                <Dialog open={this.state.status}>
                    <DialogTitle>{this.state.title}</DialogTitle>
                    <DialogContent>
                        <CreateInput name={this.state.displayName.name1} value={this.state.item.value1} handleChange={this.handleChange} number="1"/>
                        <CreateInput name={this.state.displayName.name2} value={this.state.item.value2} handleChange={this.handleChange} number="2"/>
                        <CreateInput name={this.state.displayName.name3} value={this.state.item.value3} handleChange={this.handleChange} number="3"/>
                        <CreateInput name={this.state.displayName.name4} value={this.state.item.value4} handleChange={this.handleChange} number="4"/>
                        <CreateInput name={this.state.displayName.name5} value={this.state.item.value5} handleChange={this.handleChange} number="5"/>
                        <CreateInput name={this.state.displayName.name6} value={this.state.item.value6} handleChange={this.handleChange} number="6"/>
                    </DialogContent>
                    <DialogActions>
                        <div className={this.state.cancelButton ? "visible" : "invisible"}>
                            <Button onClick={this.closeForm} color="primary">
                                Cancel
                            </Button>
                        </div>
                        <Button onClick={this.valueSend} color="primary">
                            {this.state.endButton ? this.state.endButton : null}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};


function CreateInput(props){
    return (
        <div className={ props.name !== "" ? "visible" : "invisible"}>
            <DialogContentText>{props.name}</DialogContentText>
            <TextField id={"form-dialog-user-" + props.name} value={props.value} onChange={props.handleChange} name={"value" + props.number}
                       autoFocus
            />
        </div>
    )
}