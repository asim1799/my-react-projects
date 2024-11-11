import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [user, setUser] = useState({});
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    setUser(data);
  }
  useEffect(
    function () {
      console.log(user);
    },
    [user]
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <input placeholder="Email" {...register("email", { required: true })} />
      <input
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <input type="submit" />
    </form>
  );
}
export default Login;
