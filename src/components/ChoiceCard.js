import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const ChoiceCard = (props) => {
  return (
    <div
      className={`choice-card 
    ${
      props.winner === "win"
        ? "border-success"
        : props.winner === "loss"
        ? "border-danger"
        : "border-dark"
    }
    `}
    >
      <h2 className="text-center">{props.title}</h2>
      <img
        src={`${
          props.shape === "scissors"
            ? scissors
            : props.shape === "rock"
            ? rock
            : paper
        }`}
        alt={props.shape}
      />
      <h2>{props.winner}</h2>
      <h2>{props.score}</h2>
    </div>
  );
};

export default ChoiceCard;
