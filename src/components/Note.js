import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Note = ({ note }) => {
  return (
    <div className="border rounded-sm shadow hover:shadow-outline p-2 relative ">
      <span style={{ top: "-10px", left: "-5px" }} className="hidden absolute">
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <h1 className="font-bold">{note.title}</h1>
      <p>{note.description}</p>
    </div>
  );
};

export default Note;
