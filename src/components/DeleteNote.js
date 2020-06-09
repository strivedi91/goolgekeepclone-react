import React, { useContext } from "react";
import { SelectedNotesContext } from "../context/SelectedNotesContext";

export default function DeleteNote() {
  const [selectedNotes] = useContext(SelectedNotesContext);

  return (
    <div>
      {selectedNotes.length > 0 && (
        <div
          className="border bg-white border-red-400  top-0 px-4 py-3 w-full opacity-100 rounded absolute"
          role="alert"
        >
          <strong className="font-bold">{selectedNotes.length} selcted</strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>
      )}
    </div>
  );
}
