import { useState } from "react";

// todo card 
const ToDoCard = (props) => {

    const { toDo  } = props;
    const [title, setTitle] = useState(toDo.title);
    const [priority, setPriority] = useState(toDo.priority);
    const [description, setDescription] = useState(toDo.descrption);
    const [isEditing, setIsEditing] = useState(false);


    const handleSetToDoComplete = () => {}
    const handleDeleteToDo = () => {}
    const handleUpdateToDo = () => {}

    return (
        <div>
          {!isEditing && <h2>{toDo.title}</h2>}
          {isEditing && (
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          )}
          <p>ID: {toDo.id}</p>
          {!isEditing && <p>Description: {toDo.description}</p>}
          {isEditing && (
                    <>
            <textarea
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
                    <br/>
                    </>
          )}
                
          {!isEditing && <p>Priority: {toDo.priority}</p>}
          {isEditing && (
            <select
              onChange={(e) => {
                setPriority(e.target.value);
              }}
                        value={priority}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          )}
          <p>Is Complete: {toDo.isComplete ? "Complete" : "Incomplete"}</p>
          <p>Creation Date: {toDo.creationDate.toString()}</p>
          <p>Last Modified: {toDo.lastModified.toString()}</p>
          <p>
            Completed Date: {toDo.completedDate && toDo.completedDate.toString()}
          </p>
          <button
            onClick={() => {
              handleSetToDoComplete();
            }}
          >
            Toggle Complete
          </button>
          <button
            onClick={() => {
              handleDeleteToDo();
            }}
          >
            Delete ToDo
          </button>
                {!isEditing && 
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit ToDo
          </button>
                }
                {isEditing && 
          <button
            onClick={() => {
              setIsEditing(false);
                        handleUpdateToDo()
            }}
          >
            Update ToDo
          </button>
                }
        </div>
      );
}

export default ToDoCard;