import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Practical4.css'

const Practical4 = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="practical-container">
      <div className="practical-header">
        <h1 className="practical-title">Practical 4: Todo Application</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      
      <div className="practical-content">
        <div className="todo-container">
          <div className="todo-input-section">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a new task..."
              className="todo-input"
            />
            <button onClick={addTodo} className="add-btn">
              Add Task
            </button>
          </div>

          <div className="todo-stats">
            <span>Total: {todos.length}</span>
            <span>Completed: {todos.filter(t => t.completed).length}</span>
            <span>Pending: {todos.filter(t => !t.completed).length}</span>
          </div>

          <div className="todo-list">
            {todos.length === 0 ? (
              <div className="empty-state">
                <p>No tasks yet. Add one to get started!</p>
              </div>
            ) : (
              todos.map(todo => (
                <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                  />
                  <span className="todo-text">{todo.text}</span>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practical4
