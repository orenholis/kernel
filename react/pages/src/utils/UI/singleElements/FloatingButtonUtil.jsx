import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

export default class FloatingButtonUtil extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.mode === undefined){
            alert("Mode missing FloatingButton util. Err can occur.");
        }

        this.state = {
            mode: this.props.mode,
            color: this.props.color ? this.props.color : "secondary",
            variant: this.props.variant ? this.props.variant : "extended"
        }
    }

    render() {
        return (
            <div>
                <Fab aria-label="add" color={this.state.color} variant={this.props.variant} size="medium">
                    { this.state.mode === "add" ?
                        <AddIcon/> :
                        null
                    }
                    { this.state.mode === "favorite" ?
                        <FavoriteIcon /> :
                        null
                    }
                    { this.state.mode === "edit" ?
                        <EditIcon /> :
                        null
                    }
                    { this.state.mode === "cancel" ?
                        <CloseIcon /> :
                        null
                    }
                </Fab>
            </div>
        );
    }
}