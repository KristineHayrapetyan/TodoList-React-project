

export  function Todos({todos, doneTodo, removeTodo}) {
  return (
    <div className='Todos'>
        {
            todos.map(el=> <div className='Todo' key={el.id}>
                <span className='checkbox'>
                    <input type="checkbox" onClick={()=>doneTodo(el.id)}/>
                </span>
                <span className={el.done? 'title done': 'title'}>{el.title}</span>
                <span className="delete">
                <button onClick={()=>removeTodo(el.id)}></button>
                </span>
               
            </div>)
        }


    </div>
  )
}
