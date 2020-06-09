import React, { useContext } from "react";
import { SelectedNotesContext } from "../context/SelectedNotesContext";
import { NotesContext } from "../context/NotesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteNote() {
  const [selectedNotes, setSelectedNotes] = useContext(SelectedNotesContext);
  const [notes, setNotes] = useContext(NotesContext);

  const deleteNotes = () => {
    let filteredNotes = notes.filter((x) => !selectedNotes.includes(x._id));
    setNotes([...filteredNotes]);
    setSelectedNotes([]);
  };

  return (
    <div>
      {selectedNotes.length > 0 && (
        <div
          className="border bg-white border-red-400  top-0 px-4 py-3 w-full opacity-100 rounded absolute"
          role="alert"
        >
          <strong className="font-bold">{selectedNotes.length} selcted</strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <FontAwesomeIcon icon={faTrash} onClick={deleteNotes} />
          </span>
        </div>
      )}
    </div>
  );
}
