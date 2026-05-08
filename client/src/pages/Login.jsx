import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

export default function Auth() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {

        // Login Success
        if (isLogin) {

          localStorage.setItem(
            "authToken",
            data.token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(data.user)
          );

          navigate("/profile");

        } else {

          // After signup switch to login
          alert("Account created successfully");
          setIsLogin(true);

        }

      } else {
        alert(data.msg);
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0624] px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#1a0f38]/95 p-8 shadow-2xl"
      >

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="mt-2 text-sm text-white/60">
            {isLogin
              ? "Login to continue"
              : "Join the L_card rewards experience"}
          </p>
        </div>

        {/* Name */}
        {!isLogin && (
          <div className="mt-6">
            <div className="flex items-center gap-2 rounded-xl bg-[#24124a] px-4 py-3">
              <User size={18} className="text-white/60" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
        )}

        {/* Email */}
        <div className="mt-4">
          <div className="flex items-center gap-2 rounded-xl bg-[#24124a] px-4 py-3">
            <Mail size={18} className="text-white/60" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <div className="flex items-center gap-2 rounded-xl bg-[#24124a] px-4 py-3">
            <Lock size={18} className="text-white/60" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black transition hover:bg-emerald-400"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        {/* Toggle */}
        <p className="mt-6 text-center text-sm text-white/60">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-semibold text-emerald-400 hover:text-emerald-300"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>

        </p>

      </form>

    </div>
  );
}