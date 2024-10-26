import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import coverImg from "../image/coverImg.jpg";
import checkValidate from "../utils/checkValidate";
import { auth } from "../utils/firebase";
import Header from "./Header";

const Login = () => {
    const navigate = useNavigate();
    const [isSignInFornm, setIsSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInFornm);
    }

    const handleButtonClick = () => {
        const message = checkValidate(!isSignInFornm ? name.current.value : null,email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInFornm){
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
            });
        }else{
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    return (
        <div className="md:min-h-screen relative flex flex-col justify-between" style={{ backgroundImage: `url(${coverImg})` }}>
            <div className="relative flex flex-col md:min-h-screen w-full z-10 bg-black md:bg-transparent">
                < Header />
                <div className="pt-[35%] md:pt-0 flex w-full h-full min-h-screen justify-start md:justify-center items-start md:items-center px-7">
                    <form onSubmit={(e) => e.preventDefault()} className="text-white flex flex-col lg:w-1/3 w-full bg-black bg-opacity-75 md:p-14 rounded-md">
                        <h1 className="font-bold text-3xl py-4 ">{isSignInFornm ? "Sign In" : "Sign Up"}</h1>
                        {
                            !isSignInFornm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-2 bg-transparent outline-none border border-stone-400 rounded-md placeholder:text-stone-400 placeholder:text-lg placeholder:font-medium" />
                        }
                        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-2 bg-transparent outline-none border border-stone-400 rounded-md placeholder:text-stone-400 placeholder:text-lg placeholder:font-medium" />
                        
                        <input ref={password} className="p-4 my-2 bg-transparent outline-none border border-stone-400 rounded-md placeholder:text-stone-400 placeholder:text-lg placeholder:font-medium" type="password" placeholder="Password" />
                        <p className="text-red-600 font-bold py-2">{errorMessage}</p>
                        <button  className="py-4 my-4 w-full bg-red-600 font-semibold" onClick={handleButtonClick}>
                            {isSignInFornm ? "Sign In" : "Sign Up"}
                        </button>
                        <p className="my-4">{isSignInFornm ? "New to Netflix?" : "Already an Account?"} <span className="cursor-pointer" onClick={toggleSignInForm}>{isSignInFornm ? "Sign up now." : "Sign In Now."}</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;