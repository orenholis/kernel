import React from "react";
import DialogUtil from "../UI/templates/DialogUtil.jsx";
import HeaderUtil from "../UI/templates/HeaderUtil.jsx";

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
                if(response.godMode){
                    this.state.onChange({registration: true, name: data.name, godMode: "God"});
                } else if(response === true){
                    alert("Login sucessfuly");
                    this.state.onChange({status: "loaded", name: data.name});
                } else {
                    alert("Login was unsucessful");
                }
            })
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <DialogUtil onChange={this.login} title={"Login"} name1={"name"} name2={"password"} endButton={"Login"} cancelButton={false}/>
            </div>
        );
    }
}