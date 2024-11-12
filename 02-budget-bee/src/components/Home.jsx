import styled from "styled-components";
import { TbSquareRoundedLetterT, TbLocationDollar } from "react-icons/tb";
const StyledWelcomeScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 10px;
  width: 50vw;
  height: 50vh;
  color: #fff;
  background-color: #383d3d;
  text-align: center;
  border: 8px solid gray;
  border-radius: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr;
  padding: 30px;
  div {
    background-color: #252626;
    border: 3px solid #4b4e4e;
    border-radius: 20px;

    padding: 5px;
  }
  button {
    cursor: pointer;
  }
`;
const StyledInput = styled.input`
  height: 50px;
  width: 70%;
  text-align: center;
  border: 3px solid #4b4e4e;
  border-radius: 10px;
  align-self: center;
  justify-self: center;
`;
const StyledSendButton = styled.button`
  height: 50px;
  width: 50px;
  font-size: 24px;
  background-color: #cdbd95;
  border-radius: 50%;
  margin-top: 5px;
  padding-top: 5px;
`;
const StyledTransactionsButton = styled.button`
  height: 60px;
  width: 60px;
  font-size: 32px;
  background-color: #9bd7b7;
  border-radius: 50%;
  padding-top: 5px;
`;
function Home({ user }) {
  return (
    <StyledWelcomeScreen>
      <div>
        <h3>Welcome {user.username}</h3>
      </div>
      <div className="account-info">
        <h4>Account informations</h4>
        <h5>Your balance: X</h5>
      </div>
      <StyledInput placeholder="amount" />
      <StyledInput placeholder="recipient" />
      <div>
        <StyledSendButton>
          <TbLocationDollar />
        </StyledSendButton>
        <p>Send money</p>
      </div>
      <div>
        <StyledTransactionsButton>
          <TbSquareRoundedLetterT />
        </StyledTransactionsButton>
        <p>Transaction history</p>
      </div>
    </StyledWelcomeScreen>
  );
}

export default Home;
