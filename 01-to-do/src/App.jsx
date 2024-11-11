import { useState } from "react";
import Form from "./components/Form";
import Board from "./components/Board";

function App() {
  const [activities, setActivities] = useState([]);

  return (
    <div className="app">
      <h1>To Do List</h1>
      <Form activities={activities} setActivities={setActivities} />
      <Board activities={activities} setActivities={setActivities} />
    </div>
  );
}

export default App;
