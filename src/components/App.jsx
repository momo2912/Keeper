import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import FormAddNote from "./FormAddNote";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    console.log(note);
    if (note.title === "" || note.body === "") {
      toast.error("Title and Note can not be empty!");
    } else {
      setNotes((prevNotes) => {
        return [...prevNotes, note];
      });
    }

  }

  function onDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <>
      <ToastContainer />
      <div className="App">
        <Header />
        <FormAddNote onAdd={addNote} />

        {notes.map((note, index) => {
          return <Note key={index} id={index} title={note.title} body={note.body} onDelete={onDelete} />;
        })}

        <Footer />
      </div>
    </>
  );
}

export default App;
