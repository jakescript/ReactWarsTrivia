import React, {Component} from "react"
import LivesTracker from "./LivesTracker"

class Submission extends Component{
    constructor(){
        super()
        this.state = {
            lives: 3,
            display: "block",
            guess: "",
            win: false,
            loss: false
        }

        this.decrementLife = this.decrementLife.bind(this)
        this.guessInput = this.guessInput.bind(this)
    }

    decrementLife(){
        this.setState(prevState => {
            if(this.state.lives === 0){ // LOSS LOGIC
                return{
                    lives: 0,
                    display: "none",
                    loss: true
                }
            }else if(this.state.guess === this.props.char.name){ // WIN LOGIC
                    // this.state.win = true
                    return {
                        display: "none",
                        win: true
                    }
            }
            //GUESS LOGIC
            return{
                lives: prevState.lives - 1
            }

            
        })
    }

    guessInput(event){
        this.setState({
            guess: event.target.value
        })
    }

    render(){
        if(this.state.win){
            return(
                <div className="submission-section">
                    <h1>You Won, I have no idea how...</h1>
                </div>
            )
        }else if(this.state.loss){
            return(
                <div className="submission-section">
                    <h1>You Lost</h1>
                    <p>The answer is {this.props.char.name}</p>
                    <p>Its okay, this games nearly impossible</p>
                </div>
            ) 
        }


        return(
            <div className="submission-section">
                <LivesTracker lives={this.state.lives}/>
                <div style={{display: this.state.display}} className="sub-fields">
                    <input value={this.state.guess} onChange={this.guessInput} type="text"></input>
                    <button onClick={this.decrementLife}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Submission