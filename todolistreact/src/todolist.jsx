import react, {useState} from 'react';

function TodoList(){
    const [Tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState('');

    function handleInputChange(event){
            setnewTask(event.target.value);
    }
    function addTask(){

          if(newTask.trim() !== ""){
            setTasks(T => [...T, newTask]);
          setnewTask("")
          }

    }
    function deleteTask(index){
      const updatedTasks = Tasks.filter((a, i) => i !== index);
      setTasks(updatedTasks);
    }

     return(<div className='Bodyy'>
           <h1>TodoList</h1>
           <input type="text"
           placeholder='Enter a task'
           value={newTask} 
           onChange={handleInputChange}/>
           <button onClick={addTask}>
            Add
           </button>

            {Tasks.map((task, index)=> 
            <p key={index}>
              <span>{task} </span>
              <button onClick={()=> deleteTask(index)}>
                delete
              </button>
            </p>)}
     </div>);
}
export default TodoList;