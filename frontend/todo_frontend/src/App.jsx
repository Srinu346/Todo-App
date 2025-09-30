import { useState } from 'react';
import './App.css';

function App() {
  const [todoData, setTodoData] = useState([]);

  const getTodo = async () => {
    const response = await fetch('http://localhost:3000/todos', {
      method: "GET",
    });
    const todos = await response.json();
    console.log("Todos Called");
    console.log(todos);
    setTodoData(todos);
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={getTodo}>Todos List</button>
      <div>
        {todoData.length > 0 ? (
          <ul>
            {todoData.map((todo, index) => (
              <li key={todo.id || index}>{JSON.stringify(todo)}</li>
            ))}
          </ul>
        ) : (
          <p>No todos yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
