import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import FormAddNote from "./FormAddNote";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

function App() {
  const [notes, setNotes] = React.useState([]);
  const newTaskList = useSelector(state => state.task.taskList);
  console.log(newTaskList);
  function addNote(note) {
    if (note.title === "" || note.body === "") {
      return;
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

        {newTaskList?.map((task, index) => {
          return <Note key={index} id={index} title={task.title} body={task.body} onDelete={onDelete} />;
        })}

        <Footer />
      </div>
    </>
  );
}

export default App;
