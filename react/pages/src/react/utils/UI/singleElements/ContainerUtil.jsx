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
            <div>
                {this.state.mode === "boxes" ?
                    <ModeBoxes children={this.props.children} link={this.props.link} class={this.props.class} pictureLink={this.props.pictureLink}/> :
                    null
                }
                {this.state.mode === "title" ?
                    <div className={this.state.class}>
                        <ModeTitle childern={this.props.children} gitLink={this.props.gitLink} urlLink={this.props.urlLink} contentText={this.props.contentText} />
                    </div> :
                    null
                }
                {this.state.mode === undefined ?
                    <div className={this.state.class}>
                        {this.props.children}
                    </div> :
                    null
                }
            </div>
        );
    }
}

class ModeBoxes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: this.props.link ? this.props.link : "",
            class: classNames(this.props.class, "container-util-mode-boxes")
        };
    }



    render() {
        return(
            <div>
                <a href={this.state.link} className="container-util-mode-boxes-link">
                    <div className={this.state.class}>
                        <div className="container-util-mode-boxes-picture-all">
                            <img className="container-util-mode-boxes-picture" src={this.props.pictureLink} />
                        </div>
                        <div className="container-util-mode-boxes-text-all">
                            <p className="container-util-mode-boxes-text">
                                {this.props.children}
                            </p>
                        </div>
                    </div>
                </a>
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