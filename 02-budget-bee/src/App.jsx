import Login from "./components/Login";
import Home from "./components/homeScreen/Home";
import Logo from "./components/Logo";
import LogOutButton from "./components/LogOutButton";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <Toaster position="bottom-center" />
      <Logo />
      {isLogged ? (
        <>
          <Home />
          <LogOutButton setIsLogged={setIsLogged} />
        </>
      ) : (
        <Login setIsLogged={setIsLogged} />
      )}
    </div>
  );
}

export default App;
