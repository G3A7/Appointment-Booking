import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();
  // function onSubmithandler(e) {
  //   e.preventDefault();
  // }
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 border  min-w-[340px] rounded-xl sm:min-w-96 text-zinc text-sm  shadow-lg">
        <p className="text-2xl font-semibold">{state == "Sign Up" ? "Create Account" : "Login"}</p>
        <p>Please {state == "Sign Up" ? "sign up " : "log in"} to book appointment</p>
        {state == "Sign Up" ? (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          <p>Email</p>
          {/* <input type="text" onChange={(e) => setName(e.target.value)} value={name} /> */}
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          onClick={() => {
            setToken(true);
            navigate("/");
          }}
          type="button"
          className="bg-primary text-white w-full py-2 rounded-md text-base"
        >
          {state == "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account ?
            <span
              onClick={() => setState("Login")}
              className="underline text-primary cursor-pointer"
            >
              {" "}
              Login Here{" "}
            </span>
          </p>
        ) : (
          <p>
            Create an new account ?
            <span
              onClick={() => setState("Sign Up")}
              className="underline text-primary cursor-pointer"
            >
              {" "}
              click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
