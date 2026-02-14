import { useState } from 'react';
import Background from '@/components/login/Background';
import Earth from '@/components/login/Earth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-black font-sans">
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
            -webkit-text-fill-color: white !important;
            -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
            transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>
      <Background />

      <div className="w-full max-w-[350px] h-[420px] relative z-20">
        <div 
          className="w-full h-full rounded-[15px] px-8 py-6 flex flex-col justify-between relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(1.5px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '0.5px solid rgba(255, 255, 255, 0.4)' 
          }}
        >
          
          <h1 
            className="text-[32px] text-center text-white tracking-wider mt-2 font-bold"
            style={{ 
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Login to K!26
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-white text-[13px] tracking-wide ml-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1A0B2E]/40 border-[0.5px] border-white/40 rounded-[15px] px-5 py-2 text-white text-sm focus:outline-none focus:border-white transition-all shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-white text-[13px] tracking-wide ml-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1A0B2E]/40 border-[0.5px] border-white/40 rounded-[15px] px-5 py-2 text-white text-sm focus:outline-none focus:border-white transition-all shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#E500A4] hover:bg-[#D40096] text-white text-base py-1.5 rounded-[15px] transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-white/20 shadow-[0_0_15px_rgba(229,0,164,0.3)]"
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <p className="text-white/90 text-[11px]">
              don't have account ?{' '}
              <a href="/register" className="text-[#E500A4] hover:text-[#FF33C4] transition-colors ml-0.5">
                Register Now
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-white/20"></div>
            <span className="text-white/80 text-[11px]">Or</span>
            <div className="flex-1 border-t border-white/20"></div>
          </div>

          <div className="flex justify-center mb-2">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-black text-[12px] font-medium py-2 px-5 rounded-md transition-all flex items-center justify-center gap-2.5 w-max"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              sign in with google
            </button>
          </div>
          
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[82%] scale-[1.52] z-0 flex justify-center w-full pointer-events-none">
        <Earth />
      </div>
      
    </div>
  );
}