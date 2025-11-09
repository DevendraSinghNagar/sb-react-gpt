import { useRef, useState } from "react";
import Header from "./Header";
import validators from "../utils/validators";
import shivbabaImage from "../assets/shivbaba.jpg";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isLogin, setIsLogin] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlerSubmit = () => {
    // console.log(emailRef?.current?.value);
    // console.log(passwordRef?.current?.value);

    const checkValidation = validators(
      emailRef?.current?.value,
      passwordRef?.current?.value
    );
    console.log(checkValidation);
    setErrorMessage(checkValidation);
    if (checkValidation) return;
    setIsLogin(!isLogin);
  };

  return (
    <main
      style={{
        backgroundImage: `url(${shivbabaImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black text-white p-5 w-6/12 mx-auto"
      >
        <h2 className="text-5xl mb-4">{isLogin ? "Sign In" : "Sign Up"} </h2>
        <div className="flex flex-col gap-2 my-2">
          <label className="text-2xl" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            id="email"
            className="p-2 border rounded bg-transparent"
            type="email"
            placeholder="Email"
          />
        </div>{" "}
        <div className="flex flex-col gap-2 my-2">
          <label className="text-2xl" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            id="password"
            className="p-2 border rounded bg-transparent"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col gap-2 my-4 text-red-500">
          {errorMessage}
        </div>
        <div className="flex flex-col gap-2 my-4">
          <button
            className="bg-red-500 p-2 rounded cursor-pointer"
            onClick={handlerSubmit}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
