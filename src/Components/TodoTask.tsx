import React from 'react';
import { ITask } from '../Interface';



interface Props {
    task?: ITask;
    compliteTask(taskDelete: string): void;
}
const TodoTask = ({task,compliteTask}:Props) => {
    return (
        <div className='container mx-auto'>
           <h3> {
                task?.taskName
            }</h3>
            <h4>
            {
                task?.deadLine
            }
            </h4>
           {/*  <button
             onClick={()=>{
                compliteTask(ITask.taskName);
            }}>X</button> */}
        </div>
    );
};

export default TodoTask;