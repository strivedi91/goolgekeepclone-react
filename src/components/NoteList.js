import React, { useContext } from "react";
import Note from "../components/Note";
import { NotesContext } from "../context/NotesContext";

const NoteList = () => {
  const [notes] = useContext(NotesContext);

  return (
    <div className="grid grid-cols-6 mt-6">
      <div className="col-start-2 col-span-4 grid grid-cols-3 gap-4">
        {notes.map((item) => (
          <Note key={item._id} note={item} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
