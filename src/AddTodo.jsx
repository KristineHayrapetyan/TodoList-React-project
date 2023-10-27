
import { useState } from 'react';

export function AddTodo({addTodo}) {


    const [input, setInput]=useState('');


    const submitHandler=(e)=>{
        e.preventDefault();
        if(input.trim().length===0) return;
        addTodo(input);
        setInput('');
    }


  return (
    <form className='AddTodo'  onSubmit={submitHandler}>
        <input type="text" onChange={e=>setInput(e.target.value)} value={input}/>
        <input type="submit" value="Add New Todo" />

    </form>
  )
}
