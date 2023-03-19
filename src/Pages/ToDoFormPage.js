import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';



const ToDoFormPage = (props) => {

	const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [priority, setPriority] = useState("")

	//instantiate navigator 
	const navigate = useNavigate();

    const handleCreateToDo = async () => {

		//if we are creating a new entry, let's refresh the page
		setShouldRefresh(true)

		console.log(urlEndPoint)
		const req =  {
            title: title,
            description: description,
            priority: priority
          }
		console.log(req);
        axios.post(`${urlEndPoint}/todos/create-one`, req)
          .then(function (response) {
            console.log(response);
          },{
			'Content-Type': 'application/x-www-form-urlencoded'
		  })
          .catch(function (error) {
            console.log(error);
          }); 

		  setShouldRefresh(false);
    }


    return (
		<div>
			<h1>Create ToDo Form</h1>
			<label>Title</label>
			<input type="text" onChange={(e)=>{
				setTitle(e.target.value)
			}} />
			<br/>
			<label>Description</label>
			<textarea type="text" onChange={(e)=>{
				setDescription(e.target.value)
			}} />
			<br/>
			<label>Priority</label>
			<select onChange={(e)=>{
				setPriority(e.target.value)
			}}>
				<option>High</option>
				<option>Medium</option>
				<option>Low</option>
			</select>
			<br/>
			<button onClick={()=>{
				handleCreateToDo()
				navigate("/")
			}}>Create ToDo</button>
		</div>
	)
}

export default ToDoFormPage