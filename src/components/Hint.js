import React, {Component} from "react"

class Hint extends Component{
    constructor(){
        super()
        this.state = {
            showHint: "none",
            loading: "false",
            display: "none",
            hintTxt: ""
        }

        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle(){
        this.setState({loading: true})
        if(this.state.loading){
            this.setState({display: "block"})
        }

        fetch(this.props.getHint)
            .then(res => res.json())
            .then(data => {
                let name = Object.keys(data)[0]
                let hint = data.name
                this.setState({
                    showHint: "block",
                    loading: false,
                    display: "none",
                    hintTxt: hint
                })
            })
    }

    render(){
        return(
            <div className="hint-component">
                <button onClick={this.clickHandle}>Hint</button>
                <div style={{display: this.state.showHint}}>
                    <h2>{this.props.hint}</h2>
                    <p>{this.state.hintTxt}</p>
                </div>

                <p style={{display: this.state.display}}>Loading...</p>
            </div>
        )
    }
}

export default Hint