import React from "react";

/**
 * Section util is util who makes Section with preseted css
 */
export default class SectionUtil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <section className={"section-util-section-all"} id={this.props.id}>
                <h1>{this.props.title}</h1>
                {this.props.mode === "grid" ?
                    <div className={"section-util-mid-div-grid"}>
                        {this.props.children}
                    </div> :
                    <div className={"section-util-section-mid-div"}>
                        {this.props.children}
                    </div>
                }
            </section>
        );
    }
}