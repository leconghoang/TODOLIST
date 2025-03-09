import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setTodoList([...todoList, todo]);
    } else {
      const updatedList = [...todoList];
      updatedList[editIndex] = todo;
      setTodoList(updatedList);
      setEditIndex(null);
    }
    setTodo("");
  };

  const handleDelete = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  const handleEdit = (index) => {
    setTodo(todoList[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "400px", backgroundColor: "white", padding: "20px", textAlign: "center", borderRadius: "10px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid black" }}
            type="text"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" }}>
            {editIndex === null ? "Add" : "Update"}
          </button>
        </form>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {todoList.map((item, index) => (
            <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", backgroundColor: "#ddd", marginBottom: "5px", borderRadius: "5px" }}>
              {item}
              <div>
                <button onClick={() => handleEdit(index)} style={{ marginRight: "10px", backgroundColor: "yellow", border: "none", padding: "5px", borderRadius: "3px" }}>Edit</button>
                <button onClick={() => handleDelete(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px", borderRadius: "3px" }}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;