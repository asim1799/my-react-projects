import styled from "styled-components";

const StyledLogOut = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: orangered;
  border-radius: 15px;
  border: 3px solid #e04a1b;
`;
function LogOutButton({ setIsLogged }) {
  function handleLogOut() {
    setIsLogged(false);
  }
  return <StyledLogOut onClick={handleLogOut}>Log out</StyledLogOut>;
}

export default LogOutButton;
