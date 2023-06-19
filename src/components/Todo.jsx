import React from "react";

export default function Todo({todo, removeTodo, checkTodo}) {

    return <div className="todo" 
        style={{backgroundColor: todo.done? "#5cb85c": "#fff",
                textDecoration: todo.done?"line-through":""}}>
                <div className="content">
                    <p>{todo.text}</p>
                    <p className="category">{todo.category}</p>
                </div>
                <div>
                    <button className="complete" 
                        style={{backgroundColor: todo.done? "green": "#5cb85c"}}
                        onClick={()=> checkTodo(todo.id)}
                        >
                        {todo.done?"Desmarcar":"Completar"}
                    </button>
                    <button className="remove" onClick={()=> removeTodo(todo.id)}>X</button>                    
                </div>
            </div>
}