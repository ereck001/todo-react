import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

export default function App() {
  const [todos, setTodos] = useState([])
  const [search,setSearch] = useState("")
  const [filter,setFilter] = useState("All")
  const [sort,setSort] = useState("Asc")

  const addTodo =(text,category) =>{
    const newTodos = [...todos, {
      id:Math.floor(Math.random() * 10000),
      text,
      category,
      done: false
    }]
    setTodos(newTodos)
  }

  const removeTodo = (id)=> {
    const allTodos = [...todos]
    const filteredTodos = allTodos.filter(
      todo => todo.id !== id? todo: null)

    setTodos(filteredTodos)
  }

  const checkTodo = (id) => {
    const allTodos = [...todos]
    let filteredTodos = []    
    
    for (let item of allTodos){
        if(item.id !== id){
          filteredTodos.push(item)
        }else{
          item.done = !item.done
          filteredTodos.push(item)
        }
    }
    setTodos(filteredTodos)
  }

return    <div className='app'>
              <h1>Lista de Tarefas</h1>
              <Search search={search} setSearch={setSearch}/>
              <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
              <div className="todo-list">
                {todos
                    .filter((todo)=> filter === "All"? true:filter ==="done"? todo.done:!todo.done)
                    .filter((todo) => 
                    todo.text.toLowerCase().includes(search.toLowerCase()))
                    .sort((a,b)=> sort === "Asc"? a.text.localeCompare(b.text):b.text.localeCompare(a.text))
                    .map((todo) =>(
                      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} checkTodo={checkTodo}/>
                ))}
              </div>
              <TodoForm addTodo={addTodo}/>
          </div>  
}

