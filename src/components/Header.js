import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { langList } from "../utils/constant";
import { setEnableDisable } from "../utils/gptSlice";
import { setLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const checkGPTEnable = useSelector((store) => store.gpt?.isGPTEnable);

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

  const handleGPT = () => {
    dispatch(setEnableDisable());
    // navigate("/search");
  };

  return (
    <header className="flex justify-between px-6 w-[100%] absolute z-10 bg-gradient-to-b from-black text-white bg-opacity-50">
      <h1 className=" flex items-center">
        <img className="w-16 h-auto" src="../../sb.png" alt="SB React GPT" />
        <span className="text-shadow-lg font-bold text-shadow-2xs">SB GPT</span>
      </h1>
      <div className="flex items-center justify-between ">
        {user?.email}
        <select
          className="ml-2 p-2 bg-red-500 rounded-sm"
          onChange={(e) => dispatch(setLang(e.target.value))}
        >
          {langList?.map((list) => (
            <option key={list.indentifier} value={list.indentifier}>
              {list.value}
            </option>
          ))}
        </select>
        <button
          className="mx-2 text-3xl"
          onClick={() => handleGPT()}
          title={checkGPTEnable ? "Home" : "GPT Search"}
        >
          {checkGPTEnable ? "🏠" : "🔍"}
        </button>
        <button className="text-3xl" onClick={handlerLogout} title="Logout">
          ⚙
        </button>
      </div>
    </header>
  );
};

export default Header;
