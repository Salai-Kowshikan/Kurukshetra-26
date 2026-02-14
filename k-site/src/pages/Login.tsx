import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Link } from "react-router-dom";

import Background from "@/components/login/Background";
import Earth from "@/components/login/Earth";
import GoogleOAuthLogin from "@/components/login/GoogleOAuthLogin";
import { useAuth } from "@/context/AuthContext";

const loginSchema = z.object({
  email: z.string().min(1, "Email required").email("Invalid email"),
  password: z.string().min(1, "Password required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const { handleKLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    handleKLogin({
      email: data.email,
      pwd: data.password, // ⚠️ backend expects "pwd"
    });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-black font-sans">
      <Background />

      <div className="w-full max-w-[350px] h-[460px] relative z-20">
        <div
          className="w-full h-full rounded-[15px] px-8 py-6 flex flex-col justify-between relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(1.5px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "0.5px solid rgba(255, 255, 255, 0.4)",
          }}
        >
          <h1
            className="text-[32px] text-center text-white tracking-wider mt-2 font-bold"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Login to K!26
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-white text-[13px] tracking-wide ml-2">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-[#1A0B2E]/40 border-[0.5px] border-white/40 rounded-[15px] px-5 py-2 text-white text-sm focus:outline-none focus:border-white transition-all shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]"
              />
              {errors.email && (
                <p className="text-red-400 text-xs ml-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-white text-[13px] tracking-wide ml-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="w-full bg-[#1A0B2E]/40 border-[0.5px] border-white/40 rounded-[15px] px-5 py-2 text-white text-sm focus:outline-none focus:border-white transition-all shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-2 text-xs text-white/70"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-400 text-xs ml-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E900BD] hover:bg-[#D40096] text-white text-base py-1.5 rounded-[15px] transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-white/20 shadow-[0_0_15px_rgba(229,0,164,0.3)] disabled:opacity-50"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          {/* Register Link */}
          <div className="text-center mt-3">
            <p className="text-white/90 text-[11px]">
              don't have account ?{" "}
              <Link
                to="/register"
                className="text-[#E900BD] hover:text-[#FF33C4] transition-colors ml-0.5"
              >
                Register Now
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-white/20"></div>
            <span className="text-white/80 text-[11px]">Or</span>
            <div className="flex-1 border-t border-white/20"></div>
          </div>

          {/* Google OAuth */}
          <div className="flex justify-center mb-2">
            <GoogleOAuthLogin />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[82%] scale-[1.52] z-0 flex justify-center w-full pointer-events-none">
        <Earth />
      </div>
    </div>
  );
}
