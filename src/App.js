import React, {useState} from 'react';
import "./App.css";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo !== ''){
      setTodos([{id:`${todo}-${Date.now()}` , todo, completed: false}, ...todos])
      setTodo("");
    }

  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id)
    setTodos([...delTodo])
  };
  const handleComplete = (t) => {
    setTodos(
      todos.map((item) =>{
        if(item.id === t.id){
          return {...item, completed: !item.completed}
        }
        return item
      })
    );
  };

 
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input className="input-text"type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button>Add</button>
        </form>

        <ul className = "allTodos">
{
  todos.map((t)=>(
  <li className = "singleTodo">
    <span className = {`${t.completed ? "complete" : ""}`} key={t.id}>{t.todo}</span>
    <input type="checkbox" onClick={() => handleComplete(t)}></input>
    <button onClick={()=> handleDelete(t.id)}>Delete</button>
</li>))
}
        </ul>
      </div>
    </div>
  )
}

export default App
