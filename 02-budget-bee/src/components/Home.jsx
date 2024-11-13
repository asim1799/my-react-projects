import styled from "styled-components";
import { TbSquareRoundedLetterT, TbLocationDollar } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { sendMoney } from "../features/accounts/accountSlice";
import { useState } from "react";
import { Motion } from "./Motion";
import { addTransaction } from "../features/transactions/transactionSlice";

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
  .transactions-history {
    max-height: 140px;
    overflow: auto;
    h4 {
      text-transform: uppercase;
      border-bottom: 3px solid #8a8a8a;
      margin: 5px 0px;
    }
    li {
      border-bottom: 1px solid #4b4e4e;
      margin-bottom: 4px;
      text-align: start;
    }
  }
`;
const StyledInput = styled.input`
  height: 50px;
  width: 70%;
  text-align: center;
  background-color: #9e9e9e;
  border: 3px solid #e3e3e3;
  border-radius: 10px;
  align-self: center;
  justify-self: center;
  &:focus {
    outline: 3px solid #d16a6a;
  }
  &::placeholder {
    font-weight: 800;
    text-transform: uppercase;
  }
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
function Home() {
  const [transactionToggle, setTransactionToggle] = useState(false);
  const user = useSelector((store) => store.account.user);
  const transactions = useSelector((store) => store.transaction);
  const [inputBalance, setInputBalance] = useState("");
  const [recipient, setReciepient] = useState("");
  const dispatch = useDispatch();
  function handleSend() {
    if (
      user.balance >= inputBalance &&
      recipient !== "" &&
      inputBalance !== ""
    ) {
      dispatch(sendMoney(inputBalance));
      dispatch(
        addTransaction({
          amount: inputBalance,
          recipient,
        })
      );
    } else {
      alert("Incorrect input! Try again!");
    }
    setInputBalance("");
    setReciepient("");
  }
  function handleTransactionToggle() {
    setTransactionToggle(!transactionToggle);
  }
  return (
    <Motion>
      <StyledWelcomeScreen>
        <div>
          <h3>Welcome, {user.username}</h3>
        </div>
        {transactionToggle ? (
          <div className="transactions-history">
            <h4>Transaction history:</h4>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  🟢{transaction.amount}€ -{transaction.recipient}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="account-info">
            <h4>Account informations:</h4>
            <h5>Your balance: {user.balance}</h5>
          </div>
        )}
        <StyledInput
          value={inputBalance}
          onChange={(e) => setInputBalance(e.target.value)}
          placeholder="input amount... [€]"
        />
        <StyledInput
          value={recipient}
          onChange={(e) => setReciepient(e.target.value)}
          placeholder="input recipient..."
        />
        <div>
          <StyledSendButton onClick={() => handleSend()}>
            <TbLocationDollar />
          </StyledSendButton>
          <p>Send money</p>
        </div>
        <div>
          <StyledTransactionsButton onClick={handleTransactionToggle}>
            {transactionToggle ? (
              <MdAccountCircle />
            ) : (
              <TbSquareRoundedLetterT />
            )}
          </StyledTransactionsButton>
          {transactionToggle ? (
            <p>Show account informations</p>
          ) : (
            <p>Transaction history</p>
          )}
        </div>
      </StyledWelcomeScreen>
    </Motion>
  );
}
export default Home;
