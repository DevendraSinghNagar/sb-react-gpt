import { useRef, useState } from "react";
import Header from "./Header";
import validators from "../utils/validators";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handlerSubmit = () => {
    const checkValidation = validators(
      emailRef?.current?.value,
      passwordRef?.current?.value
    );
    // console.log(checkValidation);
    setErrorMessage(checkValidation);
    if (checkValidation) return;
    // setIsLogin(!isLogin);

    // Signed up
    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("createUserWithEmailAndPassword");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
    // Signed in
    if (isLogin) {
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("signInWithEmailAndPassword");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-black text-white p-5 w-6/12 mx-auto"
    >
      <h2 className="text-5xl mb-4">{isLogin ? "Sign In" : "Sign Up"} </h2>
      {!isLogin && (
        <div className="flex flex-col gap-2 my-2">
          <label className="text-2xl" htmlFor="name">
            User name
          </label>
          <input
            ref={nameRef}
            id="name"
            className="p-2 border rounded bg-transparent"
            type="text"
            placeholder="User name"
          />
        </div>
      )}
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
      </div>
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
      <div
        className="flex flex-col gap-2 my-4 "
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "New to SB App? Sign Up" : "Already Registered? Sign In"}
      </div>
    </form>
  );
};

export default Login;
