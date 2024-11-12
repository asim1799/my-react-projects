import styled from "styled-components";

const StyledLogo = styled.h1`
  color: #5c3312;
  background: linear-gradient(71deg, #ee6f07 30%, #fcfd2d 77%);
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid #5c3312;
  border-radius: 20px;
  padding: 5px;
`;
function Logo() {
  return <StyledLogo>BudgetBee</StyledLogo>;
}

export default Logo;
