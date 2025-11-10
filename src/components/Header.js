import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handlerLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <header className="flex justify-between px-6 w-[100%] absolute z-10 bg-gradient-to-b from-black text-white">
      <h1 className=" flex items-center">
        <img className="w-16 h-auto" src="../../sb.png" alt="SB React GPT" />
        <span className="text-shadow-lg font-bold text-shadow-2xs">SB GPT</span>
      </h1>
      <div className="flex items-center justify-between ">
        {/* <img className="w-6 mr-2" src="../../sb.jpg" alt="SB React GPT" /> */}
        {user?.email}
        <button className="ml-2" onClick={handlerLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
