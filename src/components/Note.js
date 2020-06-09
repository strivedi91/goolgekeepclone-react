import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { SelectedNotesContext } from "../context/SelectedNotesContext";

const Note = ({ note }) => {
  const [selectedNotes, setSelectedNotes] = useContext(SelectedNotesContext);

  const onNoteSelect = (id) => {
    if (!selectedNotes.includes(id)) {
      setSelectedNotes([id, ...selectedNotes]);
    } else {
      setSelectedNotes(selectedNotes.filter((x) => x !== id));
    }
  };

  return (
    <div
      id="note"
      className="border rounded-sm shadow hover:shadow-outline p-2 relative "
    >
      <span
        id="selectNote"
        style={{ top: "-10px", left: "-5px" }}
        className="hidden absolute cursor-pointer"
        onClick={() => onNoteSelect(note._id)}
      >
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <h1 className="font-bold">{note.title}</h1>
      <p>{note.description}</p>
    </div>
  );
};
export default Note;
