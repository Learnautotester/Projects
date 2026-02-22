import { useState,useEffect } from "react"

export default function Todo(){
     const[newTodo,setNewTodo]=useState("");
     const[todos,setTodos]=useState(()=>{
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
     });

        useEffect(() => {
            //console.log("saved data to localstorage")
           localStorage.setItem("todos", JSON.stringify(todos));
           //console.log(localStorage.getItem('todos'));
        },[todos]);

     const NewTodo=(e)=>{
        setNewTodo(e.target.value);
     }

     const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (newTodo){
            setTodos([
                ...todos,
                {text:newTodo, completed: false}
            ])
            setNewTodo("");
          
        }
     }

     const handleDelete=(index)=>{
         const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)

     }
  
    

    return (
        <div>
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"  value={newTodo}
                placeholder='Add new todo' onChange={(e)=>{
                    NewTodo(e);
                }}
            />
            <button type='submit'>Add Todo</button>
        </form>
        <ul>
        
                {todos.map((todo, index) => (
                <li key={index}>
                    <span 
                    style={{ textDecoration : todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}</span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>

        </div>
    )
}