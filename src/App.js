import React from "react";
import AddNote from "./components/AddNote";
import "./assets/main.css";
import NoteList from "./components/NoteList";
import DeleteNote from "./components/DeleteNote";
import { NotesProvider } from "./context/NotesContext";
import { SelectedNotesProvider } from "./context/SelectedNotesContext";

const App = () => {
  return (
    <NotesProvider>
      <SelectedNotesProvider>
        <div className="container mx-auto mt-4">
          <DeleteNote></DeleteNote>
          <AddNote></AddNote>
          <NoteList></NoteList>
        </div>
      </SelectedNotesProvider>
    </NotesProvider>
  );
};

export default App;
