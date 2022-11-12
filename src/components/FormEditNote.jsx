import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/features/taskSlice";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';


function FormEditNote({ title, body, setEditing }) {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const [note, setNote] = useState({
    title: title,
    body: body,
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
    setNote({
      title: "",
      body: "",
    });
    if (note.title !== "") {
      dispatch(updateTask(note));
      toast.success("Task updated!");
      setEditing(editing => !editing);
      titleRef.current.focus();
    } else {
      toast.warning("Task must have a title");
    }
  };

  return (
    <div className="form-edit-note">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          required={true}
          ref={titleRef}
          value={note.title}
          name="title"
          className="edit-title-input"
          placeholder="Add a task..."
          onChange={handleChange}
        ></input>
        <label htmlFor="body">Note:</label>
        <textarea
          required={true}
          value={note.body}
          name="body"
          className="edit-body-input"
          placeholder="Task Description..."
          onChange={handleChange}
        ></textarea>
      </form>
      <button onClick={handleSubmit} className='form-edit-btn'>Update</button>
    </div>
  );
}

export default FormEditNote;
