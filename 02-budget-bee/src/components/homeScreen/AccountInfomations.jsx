import { useSelector } from "react-redux";

function AccountInfomations() {
  const { balance } = useSelector((store) => store.account.user);

  return (
    <div className="account-info">
      <h4>Account informations:</h4>
      <h5>Your balance: {balance}</h5>
    </div>
  );
}

export default AccountInfomations;
