import React from "react";

class ProfileStatus extends React.Component{
state = {
    editMode: false
}

activatedEditMode = () => {

    this.setState({editMode: true})

    /*this.state.editMode = true;
this.forceUpdate()*/
}
    deActivatedEditMode = () => {
        this.setState({editMode: false})
    }

    render() {

    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deActivatedEditMode} value={this.props.status}/>
            </div>
            }
        </div>
    )
} }
export default ProfileStatus