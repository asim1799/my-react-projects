import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../features/accounts/accountSlice";
import styled from "styled-components";
const StyledForm = styled.form`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 33.3vw;
  border: 3px solid #ed9455;
  border-radius: 50px;
  overflow: hidden;
  input,
  button {
    text-align: center;
    border: 2px solid #ffbb70;
  }
  button {
    color: #000000;
    background-color: #ffbb70;
    font-weight: 800;
    height: 100%;
  }
  input:focus {
    outline: none;
  }
  button:hover {
    color: #1f1f1f;
    background-color: #faac58;
    border: 2px solid #faac58;
    cursor: pointer;
  }
`;
function Login({ setIsLogged }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  function onSubmit(data) {
    dispatch(setUser(data));
    setIsLogged(true);
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <input placeholder="Email" {...register("email", { required: true })} />
      <input
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <button>Sign in</button>
    </StyledForm>
  );
}
export default Login;
