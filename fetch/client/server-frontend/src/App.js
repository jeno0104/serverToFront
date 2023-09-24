// fetch
// axios

import { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:4000/api/todo";
function App() {
  const [todoList, setTodoList] = useState(null);
  const fetchData = async () => {
    // 서버 주소, http 메소드만 필요
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);

    // fetch("http://localhost:4000/api/todo")
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };
  useEffect(() => fetchData, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData();
    // fetch("http://localhost:4000/api/todo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ text, done }),
    // }).then(() => {
    //   // 서버 주소, http 메소드만 필요
    //   fetchData();
    // });
  };
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList?.map((todo) => (
        <div key={todo.id} style={{ display: "flex", padding: 10 }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
