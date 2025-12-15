// client/src/App.jsx
import { useState, useEffect } from 'react';

const API_URL = "https://pern-test-xidr.onrender.com"; // <--- Make sure your URL is here

function App() {
  // 1. STATE
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");

  // 2. HELPER FUNCTIONS (Define these BEFORE using them)
  
  // Define getTodos first...
  const getTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todos`);
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // 3. EFFECT (Now it can "see" getTodos)
  useEffect(() => {
    getTodos();
  }, []);

  // 4. EVENT HANDLERS
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      setDescription(""); 
      getTodos(); // This works because getTodos is already defined above
    } catch (err) {
      console.error(err.message);
    }
  };

  // 5. RENDER
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>PERN Todo List</h1>
      
      <form onSubmit={onSubmitForm} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="I need to..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ flexGrow: 1, padding: '10px' }}
        />
        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Add</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
            {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;