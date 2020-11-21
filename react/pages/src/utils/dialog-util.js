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
            cancelButton: this.props.cancelButton === false ? false : true,
            endButton: this.props.endButton
        };
        console.log(this.props);

        this.handleChange = this.itemValueChange.bind(this);
        this.openForm = this.openLoginForm.bind(this);
        this.closeForm = this.closeLoginForm.bind(this);
        this.valueSend = this.sendUserInformations.bind(this);
    }

    openLoginForm(){
        this.setState({status: true});
    }

    closeLoginForm(){
        this.setState({status: false});
    }

    itemValueChange(e){
        const hodnota = e.target.closest("input").value;
        const name = e.target.closest("input").getAttribute("name");
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
        }
        this.state.onChange(data);
        this.setState({status: false});
    };

    render() {
        return (
            <div>
                <Dialog open={this.state.status}>
                    <DialogTitle>{this.state.title}</DialogTitle>
                    <DialogContent>
                        <div className={ this.state.displayName.name1 ? "visible" : "invisible"}>
                            <DialogContentText>{this.state.displayName.name1}</DialogContentText>
                            <TextField id="form-dialog-user-password" value={this.state.item.value1} onChange={this.handleChange} name="value1"
                                       autoFocus
                            />
                        </div>
                        <div className={ this.state.displayName.name2 ? "visible" : "invisible"}>
                            <DialogContentText>{this.state.displayName.name2}</DialogContentText>
                            <TextField id="form-dialog-user-password" value={this.state.item.value2} onChange={this.handleChange} name="value2"
                                       autoFocus
                            />
                        </div>
                        <div className={ this.state.displayName.name3 ? "visible" : "invisible"}>
                            <DialogContentText>{this.state.displayName.name3}</DialogContentText>
                            <TextField id="form-dialog-user-password" value={this.state.item.value3} onChange={this.handleChange} name="value3"
                                       autoFocus
                            />
                        </div>
                        <div className={ this.state.item.displayName4 ? "visible" : "invisible"}>
                            <DialogContentText>{this.state.displayName.name4}</DialogContentText>
                            <TextField id="form-dialog-user-password" value={this.state.item.value4} onChange={this.handleChange} name="value4"
                                       autoFocus
                            />
                        </div>
                        <div className={ this.state.displayName.name5 ? "visible" : "invisible"}>
                            <DialogContentText>{this.state.displayName.name5}</DialogContentText>
                            <TextField id="form-dialog-user-password" value={this.state.item.value5} onChange={this.handleChange} name="value5"
                                       autoFocus
                            />
                        </div>
                        <div className={ this.state.displayName.name6 ? "visible" : "invisible"}>
                            <DialogContentText>{this.state.displayName.name6}</DialogContentText>
                            <TextField id="form-dialog-user-password" value={this.state.item.value6} onChange={this.handleChange} name="value6"
                                       autoFocus
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <div className={this.state.cancelButton ? "visible" : "invisible"}>
                            <Button onClick={this.closeForm} color="primary">
                                Cancel
                            </Button>
                        </div>
                        <Button onClick={this.valueSend} color="primary">
                            {this.state.endButton ? this.state.endButton : "err"}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};
