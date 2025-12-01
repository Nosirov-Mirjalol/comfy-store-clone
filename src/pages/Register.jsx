import { FormInput, Submitbtn } from "../components/index";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-[350px] card shadow-2xl p-3">
        <h2 className="text-3xl font-semibold text-center p-2">Register</h2>
        <FormInput type={"text"} label={"Username"} />
        <FormInput type={"email"} label={"Email"} />
        <FormInput type={"password"} label={"Password"} />
        <Submitbtn text={"Login"} />
        <p className="text-center text-[14px] py-1 pt-3">Alredy a member? <Link className="link link-primary ml-2" to={"/login"}>Login</Link></p>
      </div>
    </section>
  )
}

export default Register
