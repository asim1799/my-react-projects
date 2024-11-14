import styled from "styled-components";
import { TbSquareRoundedLetterT, TbLocationDollar } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
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
function ButtonField({
  transactionToggle,
  handleSend,
  handleTransactionToggle,
}) {
  return (
    <>
      <div>
        <StyledSendButton onClick={() => handleSend()}>
          <TbLocationDollar />
        </StyledSendButton>
        <p>Send money</p>
      </div>
      <div>
        <StyledTransactionsButton onClick={handleTransactionToggle}>
          {transactionToggle ? <MdAccountCircle /> : <TbSquareRoundedLetterT />}
        </StyledTransactionsButton>
        {transactionToggle ? (
          <p>Show account informations</p>
        ) : (
          <p>Transaction history</p>
        )}
      </div>
    </>
  );
}

export default ButtonField;
