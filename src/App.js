import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavBar from "./components/PublicNavBar";
import ChoiceCard from "./components/ChoiceCard";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const shapes = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("tie");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");
  const [computerResult, setComputerResult] = useState("tie");
  const [computerScore, setComputerScore] = useState(0);
  let a;

  function ab() {
    a = shapes[Math.floor(Math.random() * 3)];
    console.log(a);
  }

  ab();
  const randomMove = () => {
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];

    setPlayerChoice(newPlayerChoice); // mat gian de set,
    setComputerChoice(newComputerChoice);
    calculateWinner(newComputerChoice, newPlayerChoice);
  };

  const calculateWinner = (newComputerChoice, newPlayerChoice) => {
    // compare playerChoice and computerChoice and assign 'tie', 'win' or 'loss' to computerResult and playerResult
    if (newComputerChoice === newPlayerChoice) {
      setComputerResult("tie");
      setPlayerResult("tie");
    } else if (newComputerChoice === "rock" && newPlayerChoice === "paper") {
      setComputerResult("loss");
      setPlayerResult("win");
      setPlayerScore(playerScore + 1);
    } else if (
      newComputerChoice === "paper" &&
      newPlayerChoice === "scissors"
    ) {
      setComputerResult("loss");
      setPlayerResult("win");
      setPlayerScore(playerScore + 1);
    } else if (newComputerChoice === "scissors" && newPlayerChoice === "rock") {
      setPlayerScore(playerScore + 1);
      setComputerResult("loss");
      setPlayerResult("win");
    } else {
      setComputerScore(computerScore + 1);
      setComputerResult("win");
      setPlayerResult("loss");
    }
  };

  const play = () => {
    randomMove();
  };

  return (
    <div className="App">
      <PublicNavBar />
      <Container>
        <h1>
          {" "}
          A {a} {computerScore}
        </h1>
        <h1>
          {" "}
          pLAYER {playerChoice} {playerScore}
        </h1>
        <div className="d-flex justify-content-center flex-wrap">
          <ChoiceCard
            title="You"
            winner={playerResult}
            shape={playerChoice}
            score={playerScore}
          />
          <ChoiceCard
            title="Computer"
            winner={computerResult}
            shape={computerChoice}
            score={computerScore}
          />
        </div>
        <Button onClick={play}>Random</Button>
      </Container>
    </div>
  );
}

export default App;
