import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: userName,
          email: user.email,
        });
      }

      alert("User created successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in successfully", { position: "top-center" });
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert(`Error: ${error.message}`);
    }
  };
  const Login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });

        toast.success("User logged in successfully", { position: "top-center" });
        
        navigate("/Home");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "top-center" });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg bg-white shadow-lg">
      <div className="flex justify-between mx-2">
        <h1 className="text-4xl font-bold">Signup</h1>
        <img src="src/assets/listify-high-resolution-logo.png" alt="Listify Logo" className="w-10 h-10" />
      </div>
      <p className="text-xl text-gray-500 mt-2">Create a New Account</p>
      <form onSubmit={submit}>
        <div>
          <p className="text-2xl font-semibold mt-5">Name</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-2 border-black py-2 px-2 outline-none"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="w-full border-2 border-black py-2 px-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full border-2 border-black py-2 px-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2">Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border-2 border-black py-2 px-2 outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between" >
          <Link to={"/login"} type="submit" className="bg-black text-white py-2 px-5 mt-4 text-2xl font-semibold hover:text-red-500">
            Signup
          </Link>
          <Link to={"/login"} type="submit" className="bg-black text-white py-2 px-5 mt-4 text-2xl font-semibold hover:text-red-500">
            Login
          </Link>
        </div>
      </form>

    <Link to={"/Home"}
      onClick={(e) => {
        e.preventDefault(); 
        Login();
      }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && Login()}
      className="flex items-center justify-center mt-10 bg-gray-100"
    >
      <img
        src="http://ts4.mm.bing.net/th?id=OIP.7BQvk_Vu5ovmSVWK0yZmaQHaHa&pid=15.1"
        alt="Google Logo"
        className="w-6 h-6 mr-3"
      />
      <span className="text-xl font-medium">Continue with Google</span>
    </Link>
    </div>
  );
}

export default Signup;
