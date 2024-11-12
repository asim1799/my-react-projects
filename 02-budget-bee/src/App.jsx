import Login from "./components/Login";
import Home from "./components/Home";
import Logo from "./components/Logo";
import { useSelector } from "react-redux";
function App() {
  const account = useSelector((store) => store.account);
  return (
    <div>
      <Logo />
      {account.user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
