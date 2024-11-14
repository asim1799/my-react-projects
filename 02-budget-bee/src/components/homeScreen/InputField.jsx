import styled from "styled-components";

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
function InputField({
  inputBalance,
  setInputBalance,
  recipient,
  setReciepient,
}) {
  return (
    <>
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
    </>
  );
}

export default InputField;
