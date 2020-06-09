import React, { createContext, useState } from "react";

export const SelectedNotesContext = createContext();

export const SelectedNotesProvider = (props) => {
  const [selectedNotes, setSelectedNotes] = useState([]);
  return (
    <SelectedNotesContext.Provider value={[selectedNotes, setSelectedNotes]}>
      {props.children}
    </SelectedNotesContext.Provider>
  );
};
