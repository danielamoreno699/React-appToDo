import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate}) => {
    const editInputRef = useRef(null);
   
    const [editing, setEditing] = useState(false);

  

    const handleEditing = () => {
        setEditing(true);
      };

      const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setUpdate(editInputRef.current.value, itemProp.id);
        // setUpdate(updateInput, itemProp.id);
          setEditing(false);
        }
      };

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
    

      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }

    return (
      <li className={styles.item}>
          <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />

        <button onClick={handleEditing}>
        
        <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
        
        </button>
         <button onClick={() => delTodo(itemProp.id)}>
           
         <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />

        </button>
         <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
          {/* {updateInput} */}
        </span>
        </div>
        <input
            type="text"
            ref={editInputRef}
            defaultValue={itemProp.title}
            // value={updateInput}
            // value={itemProp.title}
            className={styles.textInput}
            style={editMode}
            // onChange={(e) => setUpdateInput(e.target.value)}
            // onChange={(e) => setUpdate(e.target.value, itemProp.id)}
            onKeyDown={handleUpdatedDone}
    />
      </li>
    );
  };
  export default TodoItem;
  