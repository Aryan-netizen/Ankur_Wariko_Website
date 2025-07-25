import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex justify-start items-start">
      {/* Left Heading Section */}
      <h1 className="w-[5%] ml-20 text-right mt-20 text-8xl font-gilroy-bold uppercase dir">
        <p className="text-sm mb-10">Welcome back to the journey</p>
        Login.
      </h1>

      {/* Right Form Section */}
      <div className="h-full w-[95%] flex flex-col justify-start">

        

        {/* Login Form */}
        <div className="w-full flex justify-center items-center mt-30">
          <form className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl w-[40%] flex flex-col gap-6">
            <h2 className="text-3xl font-gilroy-bold uppercase text-center">Sign In</h2>

            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-xl bg-white/5 border border-white/20 text-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 rounded-xl bg-white/5 border border-white/20 text-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <button
              type="submit"
              className="mt-4 px-6 py-4 bg-amber-400 text-black text-xl font-gilroy-bold rounded-xl hover:scale-105 transition-transform"
            >
              Log In ➜
            </button>

            <p className="text-center text-sm mt-4 opacity-50">
              Don’t have an account? <span className="underline cursor-pointer">Sign up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
