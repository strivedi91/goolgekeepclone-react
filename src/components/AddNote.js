import React, { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";

const AddNote = () => {
  const [notes, setNotes] = useContext(NotesContext);

  const addNewNote = () => {
    if (title || description) {
      setNotes([{ title: title, description: description }, ...notes]);
      setTitle("");
      setDescription("");
    }
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="grid grid-cols-6 ">
      <div
        className="col-start-2 col-span-4 shadow appearance-none border 
      rounded text-center py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
        onBlur={addNewNote}
      >
        <input
          className="mb-4 w-full outline-none font-bold"
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full outline-none"
          id="description"
          placeholder="Take a note"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddNote;
