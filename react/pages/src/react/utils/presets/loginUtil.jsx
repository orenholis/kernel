import React from "react";
import DialogUtil from "../UI/templates/DialogUtil.jsx";

export default class LoginPresetUtil extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            onChange: this.props.onChange
        };

        this.login = this.loginInsert.bind(this);
    }

    loginInsert(data){
        fetch("/api/login-util/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then((response)=>{
                if(response === true){
                    alert("Login sucessfuly");
                    this.state.onChange({status: "loaded"});
                } else {
                    alert("Login was unsucessful")
                }
            })
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <DialogUtil onChange={this.login} title={"Login"} name1={"Name"} name2={"Password"} endButton={"Login"} cancelButton={false}/>
            </div>
        );
    }
}