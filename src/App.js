import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
import characters from "./characters.json";
//import Scoreboard from "./components/Scoreboard";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    clickedCharactersArray: [],
    score: 0,
    highscore: 0
  };

  clickCharacter = event => {
    //The target of our onClick event becomes our currentCharacter
    const currentCharacter = event.target.id;
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const clickedCharacters = this.state.clickedCharactersArr.indexOf(currentCharacter) > -1;
    // Set this.state.characters equal to the new characters array
    console.log(currentCharacter);
    if (clickedCharacters) {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharactersArr: [],
        score: 0
      });
    } else {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharactersArr: this.state.clickedCharactersArr.concat(
          currentCharacter
        ),
        score: this.state.score + 1
      }, () => {
        if (this.state.score ===12) {
          this.setState({
            characters: this.state.characters.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedCharactersArr: [],
            score: 0,
            wins: this.state.wins +1
          });
        }
      });
    }
  }


  // Map over this.state.characters and render a characterCard component for each character object
  render() {
    return (
      <div className="App">
        <Navbar 
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              removecharacter={this.removecharacter}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              clickCharacter={this.clickCharacter}
            />
          ))}
        </Wrapper>
      </div>
    );
  }

}

export default App;

//<Title>Sailor Moon Mix-Up!</Title>