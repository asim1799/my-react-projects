import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((store) => store.account);
  return (
    <div>
      <h1>BudgetBee</h1>
      {account.user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
