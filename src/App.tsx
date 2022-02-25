import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import TodoTask from './Components/TodoTask';
import { addToDb, getStoredCart } from './Components/utilities/Fakedb';
import { ITask } from './Interface';
const App:FC = () => {
    const [task,setTask]= useState<string>('');
    const [deadLine,SetDeadLine]= useState<number>(0);
    const [todoList,setTodoList]= useState<any[]>([]);

  


    

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
const compliteTask= (taskDelete:string):void=>{
setTodoList(todoList.filter((task:any)=>{
  return task.taskName !== taskDelete;
}))
}


useEffect(()=>{
  const saveCArt = getStoredCart()
  for(const key in saveCArt){
    console.log(todoList);
    
  }

},[deadLine])

// local storage 


const handleAddToCart = (product:any):void => {
console.log(product)
 const newCArt = [ ...todoList, product]
 setTodoList(newCArt)

addToDb(product)
}



  return (

  <div className='container row'>
    <div className=' container mx-auto  align-items-center'>
      <input type="text" value={task} name="task" onChange={handleChange} />
      <input type="number" value={deadLine} name="dedline" onChange={handleChange}/>
      <button onClick={addProduct}>Add Product</button>
      
<div>
  {todoList.map((task:ITask,key:number,)=>{
    return(
    <>

    <TodoTask key={key} task={task}compliteTask={compliteTask} ></TodoTask>
    <button onClick={handleAddToCart} key={key}>add </button>
    </>)

  })}
</div>

    </div>
  </div>
  )
}

export default App