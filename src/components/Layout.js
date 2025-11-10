import { Outlet } from "react-router-dom";
import shivbabaImage from "../assets/shivbaba.jpg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./../utils/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("User is signed in", user);
        const { uuid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uuid: uuid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browser");

        // const {uuid, displayName} = user.uid;
        // ...
      } else {
        // User is signed out
        console.log("User is signed out", user);
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${shivbabaImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className=""
    >
      <Header />
      <main className="">
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <footer>
        <p>&copy; 2025 React GPT App</p>
      </footer>
    </div>
  );
};

export default Layout;
