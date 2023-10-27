
import { useState } from "react";
import { Todos } from "./Todos";
import { AddTodo } from "./AddTodo";

export  function App() {

    const [todos, setTodos]=useState([
        {id:1, title: 'Angular', done:false},
        {id:2, title: 'Vue', done:false},
        {id:3, title: 'React', done:true}

    ]);

    const addTodo=(title)=>{
        const newTodo={
            id: Date.now(),
            title,
            done:false
        }
        setTodos([newTodo,...todos])
    };

    const doneTodo=(id)=>{
        const newTodos=todos.map(el=>{
            if(el.id===id) el.done=!el.done
            return el;
        })
        setTodos(newTodos)

    };

    const removeTodo=(id)=>{
        const newTodos=todos.filter(el=>el.id !==id);
        setTodos(newTodos);
    }

  return (
    <div>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} doneTodo={doneTodo} removeTodo={removeTodo}/>
       


    </div>
  )
}


