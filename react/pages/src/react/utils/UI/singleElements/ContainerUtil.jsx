import React from "react";
import classNames from 'classnames'

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
                    <ModeTitle childern={this.props.children} gitLink={this.props.gitLink} urlLink={this.props.urlLink} contentText={this.props.contentText}/>:
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

class ModeTitle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            mode: "title",
            gitLink: this.props.gitLink ? this.props.gitLink : "Will be added",
            urlLink: this.props.urlLink ? this.props.urlLink : "Will be added",
            contentText: this.props.contentText
        }

        this.changeMode = this.modeChange.bind(this);
    }

    modeChange(props){
        if(this.props.contentText === undefined){
            return console.log("In container util with project text missing.");
        }
        this.setState({
           mode: "content"
        });
    }

    render(){
        return(
            <div>
                {this.state.mode === "title" ?
                    <h1 className="container-util-title" onClick={this.changeMode}>{this.props.childern}</h1> :
                    <div>
                        <h1 className="container-util-content-title">{this.props.childern}</h1>
                        <div className="container-util-content-content">
                            <p>Git:
                                <a className="container-util-content-links" href={this.state.gitLink}>{this.state.gitLink}</a>
                            </p>
                            <p>Url:
                                <a className="container-util-content-links" href={this.state.urlLink}>{this.state.urlLink}</a>
                            </p>
                            <p>{this.state.contentText}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}