import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import listity from "../assets/listify-logo.png";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.", { position: "top-center" });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
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
        toast.success("User created successfully", { position: "top-center" });
        navigate("/Home");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "top-center" });
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
        navigate("/");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "top-center" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Internal CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .animate-zoom-in { animation: zoomIn 0.8s ease-out forwards; }
      `}</style>

      <div className="max-w-md w-full mx-auto p-8 border border-gray-200 rounded-2xl bg-white shadow-xl animate-zoom-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold animate-fade-in-up">Signup</h1>
          <img src={listity} alt="Listify Logo" className="w-12 h-12 animate-fade-in-up" />
        </div>

        <p className="text-xl text-gray-500 mt-2 animate-fade-in-up">
          Create a New Account
        </p>

        {/* Form */}
        <form onSubmit={submit} className="mt-6 space-y-5">
          <div className="animate-fade-in-up">
            <p className="text-xl font-semibold">Name</p>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-2 border-black py-2 px-2 rounded-lg outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="animate-fade-in-up">
            <p className="text-xl font-semibold">Email</p>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-2 border-black py-2 px-2 rounded-lg outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="animate-fade-in-up">
            <p className="text-xl font-semibold">Password</p>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-black py-2 px-2 rounded-lg outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="animate-fade-in-up">
            <p className="text-xl font-semibold">Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border-2 border-black py-2 px-2 rounded-lg outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center animate-fade-in-up">
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition"
            >
              Signup
            </button>
            <Link
              to="/Login"
              className="text-lg font-semibold text-black hover:text-red-500 transition"
            >
              Login
            </Link>
          </div>
        </form>

        {/* Google Auth */}
        <button
          onClick={googleLogin}
          className="flex items-center justify-center w-full py-3 mt-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition animate-fade-in-up"
        >
          <img
            src="http://ts4.mm.bing.net/th?id=OIP.7BQvk_Vu5ovmSVWK0yZmaQHaHa&pid=15.1"
            alt="Google Logo"
            className="w-6 h-6 mr-3"
          />
          <span className="text-lg font-medium">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Signup;
