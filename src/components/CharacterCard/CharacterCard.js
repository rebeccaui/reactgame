import React from "react";
import "./CharacterCard.css";
    
const CharacterCard = props => (
    <div className="card" onClick={props.clickCharacter}>
        <div className="img-container">
            <img id ={props.id} alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                <strong>{props.name}</strong>
                </li>
            </ul>
        </div>
    </div>
);

/*
class CharacterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };

    this.clickCharacter = this.clickCharacter.bind(this)


    //When the card is clicked, clicked = true
    clickCharacter() {
        console.log("Clicked!");
        this.setState((prevState, props) => (
            clicked 
            if (clicked) {
                
            }

            return{
                clicked
        }
    }
};
*/
export default CharacterCard;