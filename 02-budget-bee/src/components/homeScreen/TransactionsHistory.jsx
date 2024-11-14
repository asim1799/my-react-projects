import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledTransactions = styled.div`
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
`;
function TransactionsHistory() {
  const transactions = useSelector((store) => store.transaction);
  return (
    <StyledTransactions className="transactions-history">
      <h4>Transaction history:</h4>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            🟢{transaction.amount}€ -{transaction.recipient}
          </li>
        ))}
      </ul>
    </StyledTransactions>
  );
}

export default TransactionsHistory;
