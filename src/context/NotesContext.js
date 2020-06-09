import React, { useState, createContext } from "react";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      backgroundColor: "FFF",
      isArchieved: false,
      _id: "5edc8e7b2eba451b648cceab",
      title: "My Daily Task - Updated",
      description: "My First Note - Updated",
      createdOn: "2020-06-07T06:51:39.931Z",
      __v: 0,
    },
    {
      backgroundColor: "FFF",
      isArchieved: false,
      _id: "5edc9005ddcb3b4b284abd01",
      title: "My Daily Task",
      description: "My First Note",
      createdOn: "2020-06-07T06:58:13.155Z",
      __v: 0,
    },
  ]);
  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      {props.children}
    </NotesContext.Provider>
  );
};
