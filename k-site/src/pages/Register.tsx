import { useState } from 'react';
import { Mail, User, Phone, CreditCard, Building2, GraduationCap, BookOpen, MapPin, Lock, Tag, Menu } from 'lucide-react';
import spaceBg from '@/assets/k-site_registration_bg.png'; 

export default function Register() {
  const [activeTab, setActiveTab] = useState<'cegian' | 'others'>('cegian');

  const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 text-purple-500 w-4 h-4";
  const inputClass = "w-full bg-slate-900/40 border border-white/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all text-sm hover:border-purple-500";
  const labelClass = "block text-white/90 text-[10px] uppercase tracking-wider mb-1";
  const navItemClass = "text-white/90 hover:text-purple-400 transition-colors text-xs cursor-pointer uppercase tracking-tight";

  return (
    /* ADDED font-semibold HERE TO CHANGE EVERYTHING AT ONCE */
    <div className="min-h-screen relative flex flex-col items-center justify-start overflow-x-hidden font-semibold"
      style={{
        backgroundImage: `url(${spaceBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      
      {/* 1. STRETCHED NAVBAR */}
      <nav className="w-full relative z-20 px-8 py-5 flex items-center bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mr-10">K! 26</div>
        <div className="hidden lg:flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            {['Home', 'Events', 'Workshops', 'Guest Lectures', 'Technovation', 'Projects', 'Accommodation', 'Contacts'].map((item) => (
              <span key={item} className={navItemClass}>{item}</span>
            ))}
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full text-xs font-black transition-all border border-white/20 uppercase">
            Login
          </button>
        </div>
        <Menu className="lg:hidden ml-auto text-white w-6 h-6" />
      </nav>

      {/* 2. REGISTRATION BOX */}
      <div className="flex-1 flex items-center justify-center w-full p-6 relative z-10">
        <div className="w-full max-w-5xl relative z-10 bg-slate-900/70 backdrop-blur-3xl rounded-2xl p-8 border border-white/20 shadow-2xl">
          
          <h1 className="text-3xl md:text-4xl font-black text-center mb-8 text-white tracking-widest uppercase"
              style={{ fontFamily: "'Stalinist One', ui-serif, Georgia, serif" }}>
            REGISTER FOR K! 26
          </h1>

          <div className="flex justify-center gap-4 mb-10">
            {['cegian', 'others'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-12 py-2.5 rounded-lg transition-all uppercase text-xs tracking-widest border ${
                  activeTab === tab 
                  ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_20px_rgba(147,51,234,0.3)]' 
                  : 'text-white/40 border-white/10 hover:border-white/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6">
              
              {/* LEFT COLUMN */}
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Email ID</label>
                  <div className="relative"><Mail className={iconClass} /><input type="email" className={inputClass} /></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <div className="relative"><User className={iconClass} /><input type="text" className={inputClass} /></div>
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input type="text" className="w-full bg-slate-900/40 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm hover:border-purple-500 transition-all" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Mobile</label>
                  <div className="relative">
                    <Phone className={iconClass} />
                    <span className="absolute left-9 top-1/2 -translate-y-1/2 text-white/60 text-xs">+91</span>
                    <input type="tel" className={inputClass.replace('pl-10', 'pl-16')} />
                  </div>
                </div>

                {activeTab === 'cegian' ? (
                  <>
                    <div>
                      <label className={labelClass}>Roll Number</label>
                      <div className="relative"><CreditCard className={iconClass} /><input type="text" className={inputClass} /></div>
                    </div>
                    <div>
                      <label className={labelClass}>Date of Birth</label>
                      <div className="grid grid-cols-3 gap-2">
                        <input type="number" placeholder="DD" className={inputClass.replace('pl-10', 'px-3')} />
                        <select className="bg-slate-900/90 border border-white/20 rounded-lg px-2 text-white text-xs outline-none"><option>Month</option></select>
                        <input type="number" placeholder="YYYY" className="bg-slate-900/40 border border-white/20 rounded-lg px-2 text-white text-xs outline-none" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className={labelClass}>College</label>
                      <div className="relative"><Building2 className={iconClass} /><input type="text" className={inputClass} /></div>
                    </div>
                    <div>
                      <label className={labelClass}>Department</label>
                      <div className="relative"><BookOpen className={iconClass} /><input type="text" className={inputClass} /></div>
                    </div>
                    <div>
                      <label className={labelClass}>Year</label>
                      <div className="relative"><GraduationCap className={iconClass} /><select className={inputClass}><option>Select Year</option></select></div>
                    </div>
                  </>
                )}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-5">
                {activeTab === 'others' ? (
                  <>
                    <div><label className={labelClass}>State</label><div className="relative"><MapPin className={iconClass} /><input type="text" className={inputClass} /></div></div>
                    <div><label className={labelClass}>City</label><div className="relative"><MapPin className={iconClass} /><input type="text" className={inputClass} /></div></div>
                    <div><label className={labelClass}>Password</label><div className="relative"><Lock className={iconClass} /><input type="password" className={inputClass} /></div></div>
                    <div><label className={labelClass}>Confirm Password</label><div className="relative"><Lock className={iconClass} /><input type="password" className={inputClass} /></div></div>
                    <div><label className={labelClass}>Referral Code</label><div className="relative"><Tag className={iconClass} /><input type="text" className={inputClass} /></div></div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className={labelClass}>Department</label>
                      <div className="relative"><Building2 className={iconClass} /><input type="text" className={inputClass} /></div>
                    </div>
                    <div>
                      <label className={labelClass}>Year of Study</label>
                      <div className="relative"><GraduationCap className={iconClass} /><select className={inputClass}><option>Select Year</option></select></div>
                    </div>
                    <div>
                      <label className={labelClass}>Password</label>
                      <div className="relative"><Lock className={iconClass} /><input type="password" className={inputClass} /></div>
                    </div>
                    <div>
                      <label className={labelClass}>Confirm Password</label>
                      <div className="relative"><Lock className={iconClass} /><input type="password" className={inputClass} /></div>
                    </div>
                  </>
                )}

                <div className="pt-1 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 accent-purple-600 rounded border-white/20" />
                    <label className="text-white/60 text-[9px] uppercase tracking-widest">Accept Terms & Conditions</label>
                  </div>

                  <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3.5 rounded-lg transition-all text-xs tracking-[0.3em] shadow-lg shadow-purple-900/40 active:scale-95 border border-white/10 uppercase">
                    REGISTER
                  </button>

                  <p className="text-center text-white/50 text-[10px] uppercase">
                    Already have an account? <a href="/login" className="text-purple-500 hover:text-purple-400 transition-colors underline underline-offset-4">Login</a>
                  </p>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}