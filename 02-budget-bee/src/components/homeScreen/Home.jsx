import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Motion } from "../Motion";
import WelcomeMessage from "./WelcomeMessage";
import TransactionsHistory from "./TransactionsHistory";
import AccountInfomations from "./AccountInfomations";
import InputField from "./InputField";
import ButtonField from "./ButtonField";

const StyledHomeScreen = styled.div`
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
  cursor: default;
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

function Home() {
  const [transactionToggle, setTransactionToggle] = useState(false);
  const { username, balance } = useSelector((store) => store.account.user);
  const [inputBalance, setInputBalance] = useState("");
  const [recipient, setReciepient] = useState("");
  return (
    <Motion>
      <StyledHomeScreen>
        <WelcomeMessage username={username} />
        {transactionToggle ? <TransactionsHistory /> : <AccountInfomations />}
        <InputField
          recipient={recipient}
          setReciepient={setReciepient}
          inputBalance={inputBalance}
          setInputBalance={setInputBalance}
        />
        <ButtonField
          balance={balance}
          transactionToggle={transactionToggle}
          setTransactionToggle={setTransactionToggle}
          inputBalance={inputBalance}
          setInputBalance={setInputBalance}
          recipient={recipient}
          setReciepient={setReciepient}
        />
      </StyledHomeScreen>
    </Motion>
  );
}
export default Home;
