import React, {Component} from "react"
import About from "./About"
import Submission from "./Submission"
import Hint from "./Hint"

class App extends Component{
	constructor(){
		super()
		this.state ={
			char: {},
			loading: false
		}
	}

	componentDidMount(){
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/" + Math.floor(Math.random() * 88))
            .then(res => res.json())
            .then(data => {
                this.setState({
					char: data,
					loading: false
                })
			})
    }

	render(){
		if(this.state.loading){
			return (
				<div className="about-section">
					<h1>Preparing Myself...</h1>
				</div>
			)
		}

		return(
			<div>
				<About char={this.state.char}/>
				<Submission char={this.state.char}/>
				<div className="hint-section">
					<Hint hint="Homeworld" getHint={this.state.char.homeworld} />
					<Hint hint="Species" getHint={this.state.char.species}/>
				</div>
			</div>
		)
	}
}

export default App