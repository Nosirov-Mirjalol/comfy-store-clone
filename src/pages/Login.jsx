import { FormInput, Submitbtn } from "../components/index";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-[350px] card shadow-2xl p-3">
        <h2 className="text-3xl font-semibold text-center p-2">Login</h2>
        <FormInput type={"email"} label={"Email"} />
        <FormInput type={"password"} label={"Password"} />
        <Submitbtn text={"Login"} />
        <button className="btn btn-secondary my-3">Guest user</button>
        <p className="text-center text-[14px] py-1 pt-3">Not a member yet? <Link className="link link-primary" to={"/register"}>Register</Link></p>
      </div>
    </section>
  );
};

export default Login;
