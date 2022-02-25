import React, { ChangeEvent, FC, useState } from 'react';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interface';
const App:FC = () => {
    const [task,setTask]= useState<string>('');
    const [deadLine,SetDeadLine]= useState<number>(0);
    const [todoList,setTodoList]= useState<ITask[]>([]);

  


    

const handleChange= (event: ChangeEvent<HTMLInputElement>) : void=>{
  if(event.target.name === 'task'){
    setTask(event.target.value)
  }else{
    SetDeadLine(Number(event.target.value))
  }

}
const addProduct = () : void=>{

  const  newTask = {taskName:task, deadLine: deadLine};
  setTodoList([...todoList, newTask])
  console.log(todoList)
  setTask('');
  SetDeadLine(0)
}
const compliteTask = (taskDelete:string):void=>{
setTodoList(todoList.filter((task)=>{
  return task.taskName !== taskDelete;
}))
}




// local storage 





  return (

  <div className='container row'>
    <div className=' container mx-auto  align-items-center'>
      <input type="text" value={task} name="task" onChange={handleChange} />
      <input type="number" value={deadLine} name="dedline" onChange={handleChange}/>
      <button onClick={addProduct}>Add Product</button>
<div>
  {todoList.map((task:ITask,key:number)=>{
    return<TodoTask key={key} task={task}compliteTask={compliteTask}></TodoTask>
  })}
</div>

    </div>
  </div>
  )
}

export default App