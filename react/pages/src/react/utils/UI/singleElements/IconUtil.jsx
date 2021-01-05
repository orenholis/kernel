import React from "react";

export default class IconUtil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onChange: this.props.onChange,
        }

        this.handleChange = this.changeHandle.bind(this);
    }

    changeHandle(){
        this.state.onChange();
    }

    render() {
        return (
            <div className="icon-img-util" onClick={this.props.onChange ? this.handleChange : null } >
                <GenerateImgIcon
                    type={this.props.type}
                    img={this.props.img}
                    id={this.props.id} link={this.props.link ? this.props.link : null}
                    title={this.props.title ? this.props.title : null}
                />
            </div>
        );
    }
}

//types are only classic, otoceni, podbarveni
/**
 *
 *
 * @constructor
 */
function GenerateImgIcon(props){
    return (
        <div>
            {props.link && props.type ?
                <a href={props.link}>
                    <img className={"icon-img-util-img-" + props.type} src={props.img} id={"icon-" + props.iconName} title={props.title ? props.title : null}/>
                </a> :
                null
            }

            {props.link === null && props.type ?
                <img className={"icon-img-util-img-" + props.type} src={props.img} id={"icon-" + props.iconName} title={props.title ? props.title : null}/> :
                null
            }
        </div>
    )
}