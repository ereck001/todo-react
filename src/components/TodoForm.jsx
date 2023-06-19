import React, { useState } from "react";

export default function TodoForm({addTodo}){

    const [value,setValue] = useState("")
    const [category,setCategory]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value ||!category) return
        addTodo(value,category)
        setCategory("")
        setValue("")
    }


    return <div className="todo-form">
        <h2>Nova Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder="Tarefa" onChange={(e)=> setValue(e.target.value)}/>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">                    
                    Selecione uma categoria                                    
                </option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Casa">Casa</option>
                <option value="Outros">Outros</option>
            </select>
            <button>Criar Tarefa</button>
        </form>
    </div>
}
