import { useForm } from "react-hook-form";

function Login({ setUser }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    setUser(data);
  }

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
