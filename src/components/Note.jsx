import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done'
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeTask, statusCheck } from "../redux/features/taskSlice";
import FormEditNote from './FormEditNote';


function Note({ title, body, id }) {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(true);
    const finishedTask = useSelector((state) => state.task.finishedTask)
    const done = finishedTask.find((task) => task.id === id);
    const [doneChecked, setDoneChecked] = useState(done);
    const handleDelete = () => {
        if (window.confirm("Removing task")) {
            toast.success("Task removed successfully");
            dispatch(removeTask(id))
        }
    }
    useEffect(() => {
        dispatch(statusCheck({
            id,
            done: doneChecked
        }))
    }, [doneChecked])

    const handleEdit = () => {
        setEditing(editing => !editing);
    }
    const handleDoneCheck = () => {
        setDoneChecked(prevState => !prevState)
    }

    return (

        <div className="note">
            {editing ?
                <div className='note-description'>
                    <div className='note-title'>
                        <h2>{title}</h2>
                    </div>
                    <p>{body}</p>
                </div> :
                <FormEditNote title={title} body={body} setEditing={setEditing} />
            }
            <div className='note-utils'>
                <button className='delete-btn' onClick={handleDelete}><DeleteIcon /></button>
                <button className='edit-btn' onClick={handleEdit}><EditIcon /></button>
                <button className={!doneChecked ? 'done-btn' : 'done-btn-checked'} onClick={handleDoneCheck}><DoneIcon /></button>
            </div>
        </div>
    );
}

export default Note;
