import React, {Component} from "react"

class About extends Component{
    render(){
        console.log(this.props.char.name)
        let height = this.props.char.height
        let weight = this.props.char.mass
        let hair = this.props.char.hair_color
        let skin = this.props.char.skin_color
        let eyes = this.props.char.eye_color
        let birth = this.props.char.birth_year
        let gender = this.props.char.gender

        return(
            <div className="about-section">
                <h1>Let me tell you a little about myself:</h1>
                <p>I am {height} cm and weight {weight} kg. My hair is {hair} and my skin is {skin}. The color of my eyes are {eyes}, my birthyear is {birth} and my gender is {gender}.</p>
                <h2>Who am I?</h2>
            </div>
        )
    }
}

export default About