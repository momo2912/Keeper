import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    const handleDelete = () => {
        props.onDelete(props.id);
    }
    
  return (

        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <button className='delete-btn' onClick={handleDelete}><DeleteIcon /></button>
        </div>
  );
}

export default Note;
