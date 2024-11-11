import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <h1>BudgetBee</h1>
      {!user.username ? <Login setUser={setUser} /> : <Home user={user} />}
    </div>
  );
}

export default App;
