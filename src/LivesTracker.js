import React, {Component} from "react"

class LivesTracker extends Component{
    render(){
        return(
            <div>
                <p>Lives Remaining: {this.props.lives}</p>
            </div>
        )
    }
}

export default LivesTracker