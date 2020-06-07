import React from "react";
import AddNote from "./components/AddNote";
import "./assets/main.css";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="container mx-auto mt-4">
      <AddNote></AddNote>
      <NoteList></NoteList>
    </div>
  );
}

export default App;
