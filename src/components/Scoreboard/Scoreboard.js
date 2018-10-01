import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="container">
        <div className="scoreboard">Score: {props.children} | High Score: {props.children}</div>
    </div>
)

class Scoreboard extends Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }
   
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }
   
    handleLoad() {
        $(".scoreboard") //  $ is available here
    }
}

IncrementItem = () => {
    this.setState({ score: this.state.score + 1 });
  }

  