import { useState, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';


function FormAddNote({ onAdd }) {
  const titleRef = useRef();
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(note);
    setNote({
      title: "",
      body: "",
    });
    titleRef.current.focus();
  };

  return (
    <div className="form-add-note">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          required={true}
          ref={titleRef}
          value={note.title}
          name="title"
          className="title-input"
          onChange={handleChange}
        ></input>
        <label htmlFor="body">Note:</label>
        <textarea
          required={true}
          value={note.body}
          name="body"
          className="body-input"
          onChange={handleChange}
        ></textarea>
      </form>
      <button onClick={handleSubmit} className='add-btn'><AddIcon/></button>
    </div>
  );
}

export default FormAddNote;
