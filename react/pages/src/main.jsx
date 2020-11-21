import React from "react";
import ReactDOM from "react-dom";

class ReactApp extends React.Component {
    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}

ReactDOM.render(
    <ReactApp/>,
    document.getElementById("root")
);
