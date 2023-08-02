import React, { useState } from 'react'

export default function Todos() {
    
    const[task, setTask]= useState("");
    const[tasks, setTasks]= useState([])
   
    function addTask(){
        setTasks([...tasks, task])
        setTask('')
    }

    function DisplayTask(){
    if(tasks==''){
        return "No task to show"
    }
    else{
        return(
            tasks.map((item,index)=>{ 
                return( <div key={index}>
                    <p className='to-do-task'>{item}</p>
                    <button className='delete-task-btn' onClick={()=>Remove(index)}>Delete</button>
                    
                </div>)
                   })
        )
    }
        
    }
    

    function Remove(i){
        const updatedList= tasks.filter((elem,id)=>i!=id);
        setTasks(updatedList)
    }
 
    
  return (
   <>
   <div className="container">
        <input type="text" placeholder='Write task here' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>addTask()}>Add Task</button>
   </div>
   <div className="tasks">
    
   <DisplayTask/>
   </div>
   </>
  )
}
