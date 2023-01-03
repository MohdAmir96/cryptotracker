import { useState } from "react";
import AddTodoModal from "./Modal/Modal";
import './Task.css'
function Task() {
    const [todos, setTodos] = useState([])
    const [compleated, setCompleated] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        let updateList = [...todos]
        if (e.target.elements.todo.value !== '')
            updateList.push({ text: e.target.elements.todo.value, compleate: false })
        updateList = updateList.reverse()
        setTodos(updateList)
    }

    const handleComplete = (index) => {
        todos.map((item, i) => {
            if (index == i)
                item.compleate = !item.compleate
        })
        let newTodo = [...todos]
        newTodo = newTodo.reverse()
        setTodos(newTodo)
    }
    // let compleate = false
    // let completeBtn = () => {
    //     compleate = !compleate
    //     console.log('compleate', compleate);
    // }
    return <div>
        <AddTodoModal handleSubmit={handleSubmit} />

        {
            todos.map((i, index) => {
                return <>

                    {todos ? <p key={index}>{i.text} <input onClick={() => handleComplete(index)} type="checkbox" /></p> : null}
                </>
            })
        }
        <h1>compleated</h1>
        {
            todos.map((i, index) => {
                console.log(i.compleate);
                return <>
                    {i.compleate ? <p key={index}>{i.text} <input onClick={() => handleComplete(index)} type="checkbox" /></p> : null}
                </>
            })
        }
    </div>;
}

export default Task;
