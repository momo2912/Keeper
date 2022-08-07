import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import FormAddNote from "./FormAddNote";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function onDelete(id) {
    setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
            return index !== id;
        });
    })
  }

  return (
    <div className="App">
      <Header />
      <FormAddNote onAdd={addNote} />

      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} body={note.body} onDelete={onDelete}/>;
      })}

      <Footer />
    </div>
  );
}

export default App;
