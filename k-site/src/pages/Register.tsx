import { useState } from 'react';
import { Mail, User, Phone } from 'lucide-react';
import Background from '@/components/login/Background';

export default function Register() {
  const [activeTab, setActiveTab] = useState<'cegian' | 'others'>('cegian');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // CEGian form state
  const [cegianForm, setCegianForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobile: '',
    rollNumber: '',
    dobDay: '',
    dobMonth: '', 
    dobYear: '',
    department: '',
    year: '',
    password: '',
    confirmPassword: ''
  });

  // Others form state
  const [othersForm, setOthersForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobile: '',
    college: '',
    department: '',
    year: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    referralCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', activeTab === 'cegian' ? cegianForm : othersForm);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // STYLES
  const baseInputStyle = "w-full bg-[#1A0B2E]/40 border-[0.5px] border-white/40 rounded-[15px] text-white text-sm focus:outline-none focus:border-white transition-all shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]";
  const inputWithIcon = `${baseInputStyle} pl-12 pr-5 py-2`;
  const inputNormal = `${baseInputStyle} px-5 py-2`;

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-x-hidden bg-black font-sans pb-12"> 
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
            -webkit-text-fill-color: white !important;
            -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
            transition: background-color 5000s ease-in-out 0s !important;
        }
        input{
        spellcheck:false
        }
      `}</style>
      <Background />
      {/* Dark overlay */}
      <div className="absolute inset-0"></div>

      {/* Title and Tab Switcher Section */}
      <div className="w-full max-w-4xl flex flex-col items-center relative z-10 mt-12 md:mt-26">
        <h1 
          className="text-3xl md:text-5xl font-bold text-center text-white tracking-widest drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] mb-6"
          style={{
            fontFamily: "'Orbitron', 'Stalinist One', ui-serif, Georgia, serif",
            letterSpacing: '0.15em'
          }}
        >
          REGISTER FOR <span className="text-purple-500">K!26</span>
        </h1>

        {/* Tab Switcher */}
        <div className="flex gap-4 mb-8 justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('cegian')}
              className={`px-16 py-2 rounded-full transition-all font-bold text-l ${
                activeTab === 'cegian'
                  ? 'bg-purple-600 text-white border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 text-purple-300 border border-white/10 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              CEGian
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('others')}
              className={`px-16 py-2 rounded-full transition-all font-bold text-l ${
                activeTab === 'others'
                  ? 'bg-purple-600 text-white border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 text-purple-300 border border-white/10 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              Others
            </button>
        </div>
      </div>

      {/* Main Form Box */}
      <div className="w-full max-w-3xl relative z-10 mb-10">
        <div 
          className="w-full rounded-[15px] p-8 flex flex-col justify-between relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(1.5px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '0.5px solid rgba(255, 255, 255, 0.4)'
          }}
        >
          {/* Forms */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {activeTab === 'cegian' ? (
                <>
                  {/* CEGian Form - Left Column */}
                  <div className="space-y-5">
                    {/* Email ID */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Email Id
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                        <input
                          type="email"
                          value={cegianForm.email}
                          onChange={(e) => setCegianForm({ ...cegianForm, email: e.target.value })}
                          className={inputWithIcon}
                          required
                        />
                      </div>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Full Name
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                          <input
                            type="text"
                            placeholder="First Name"
                            value={cegianForm.firstName}
                            onChange={(e) => setCegianForm({ ...cegianForm, firstName: e.target.value })}
                            className={inputWithIcon}
                            required
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={cegianForm.lastName}
                          onChange={(e) => setCegianForm({ ...cegianForm, lastName: e.target.value })}
                          className={inputNormal}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Mobile
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                        <input
                          type="text" // Using type="text" with inputMode="numeric" offers better control than type="number"
                          inputMode="numeric"
                          placeholder="Enter 10 digit number"
                          value={cegianForm.mobile}
                          onChange={(e) => {
                            const val = e.target.value;
                            // Allows only digits (0-9) and limits length to 10
                            if (val === '' || (/^\d+$/.test(val) && val.length <= 10)) {
                              setCegianForm({ ...cegianForm, mobile: val });
                            }
                          }}
                          className={inputWithIcon}
                          required
                        />
                      </div>
                    </div>

                    {/* Roll Number */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Roll Number
                      </label>
                      <input
                        type="text"
                        value={cegianForm.rollNumber}
                        onChange={(e) => setCegianForm({ ...cegianForm, rollNumber: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Date of Birth
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        
                        {/* Day Input - Added logic to block numbers > 31 */}
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={2}
                          placeholder="Day"
                          value={cegianForm.dobDay}
                          onChange={(e) => {
                            const val = e.target.value;
                            // Logic: Allow empty OR (digits only AND value <= 31)
                            if (val === '' || (/^\d+$/.test(val) && parseInt(val) <= 31)) {
                              setCegianForm({ ...cegianForm, dobDay: val });
                            }
                          }}
                          className={`${inputNormal} text-center placeholder-white/50`}
                          required
                        />
                        
                        {/* Month Select - Changed color to text-white/50 for a lighter/glassy look */}
                        <select
                          value={cegianForm.dobMonth}
                          onChange={(e) => setCegianForm({ ...cegianForm, dobMonth: e.target.value })}
                          className={`${inputNormal} appearance-none text-center ${!cegianForm.dobMonth ? 'text-white/50' : 'text-white'}`}
                          required
                        >
                          <option value="" disabled>Month</option>
                          {months.map((month) => (
                            <option key={month} value={month} className="bg-[#1A0B2E] text-white">
                              {month}
                            </option>
                          ))}
                        </select>

                        {/* Year Input */}
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={4}
                          placeholder="Year"
                          value={cegianForm.dobYear}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === '' || /^\d+$/.test(val)) {
                              setCegianForm({ ...cegianForm, dobYear: val });
                            }
                          }}
                          className={`${inputNormal} text-center placeholder-white/50`}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* CEGian Form - Right Column */}
                  <div className="space-y-5">
                    {/* Department */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Department
                      </label>
                      <input
                        type="text"
                        value={cegianForm.department}
                        onChange={(e) => setCegianForm({ ...cegianForm, department: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    {/* Year */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Year
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={cegianForm.year}
                        onChange={(e) => {
                          const val = e.target.value;
                          // Allows empty string (for backspacing) OR (digits only AND value between 1 and 5)
                          if (val === '' || (/^[1-5]$/.test(val))) {
                            setCegianForm({ ...cegianForm, year: val });
                          }
                        }}
                        className={inputNormal}
                        required
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Password
                      </label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={cegianForm.password}
                        onChange={(e) => setCegianForm({ ...cegianForm, password: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Confirm Password
                      </label>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={cegianForm.confirmPassword}
                        onChange={(e) => setCegianForm({ ...cegianForm, confirmPassword: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    {/* --- TERMS AND CONDITIONS --- */}
                    <div className="flex items-center gap-3 pt-2 pl-2">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                          className="peer w-5 h-5 appearance-none rounded-full border border-white/30 bg-white/5 checked:bg-[#E500A4] checked:border-transparent transition-all cursor-pointer shrink-0"
                          required
                        />
                        {/* Custom SVG Tick */}
                        <svg 
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <label htmlFor="terms" className="text-gray-300 text-sm cursor-pointer select-none">
                        Accept Terms & Conditions
                      </label>
                    </div>

                    {/* Register Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#E500A4] hover:bg-[#D40096] text-white text-base py-3 rounded-[15px] transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-white/20 shadow-[0_0_15px_rgba(229,0,164,0.3)]"
                    >
                      Register
                    </button>

                    {/* Login Link */}
                    <div className="text-center">
                      <p className="text-gray-300 text-sm">
                        Already have an account?{' '}
                        <a href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Others Form - Left Column */}
                  <div className="space-y-5">
                    {/* ... (standard inputs) ... */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Email Id
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                        <input
                          type="email"
                          value={othersForm.email}
                          onChange={(e) => setOthersForm({ ...othersForm, email: e.target.value })}
                          className={inputWithIcon}
                          required
                        />
                      </div>
                    </div>

                     <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Full Name
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                          <input
                            type="text"
                            placeholder="First Name"
                            value={othersForm.firstName}
                            onChange={(e) => setOthersForm({ ...othersForm, firstName: e.target.value })}
                            className={inputWithIcon}
                            required
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={othersForm.lastName}
                          onChange={(e) => setOthersForm({ ...othersForm, lastName: e.target.value })}
                          className={inputNormal}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Mobile
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                        <input
                          type="tel"
                          value={othersForm.mobile}
                          onChange={(e) => setOthersForm({ ...othersForm, mobile: e.target.value })}
                          className={inputWithIcon}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        College
                      </label>
                      <input
                        type="text"
                        value={othersForm.college}
                        onChange={(e) => setOthersForm({ ...othersForm, college: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Department
                      </label>
                      <input
                        type="text"
                        value={othersForm.department}
                        onChange={(e) => setOthersForm({ ...othersForm, department: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Year
                      </label>
                      <input
                        type="text"
                        value={othersForm.year}
                        onChange={(e) => setOthersForm({ ...othersForm, year: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>
                  </div>

                  {/* Others Form - Right Column */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={othersForm.state}
                        onChange={(e) => setOthersForm({ ...othersForm, state: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={othersForm.city}
                        onChange={(e) => setOthersForm({ ...othersForm, city: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Password
                      </label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={othersForm.password}
                        onChange={(e) => setOthersForm({ ...othersForm, password: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Confirm Password
                      </label>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={othersForm.confirmPassword}
                        onChange={(e) => setOthersForm({ ...othersForm, confirmPassword: e.target.value })}
                        className={inputNormal}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1.5 pl-2">
                        Referral Code <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={othersForm.referralCode}
                        onChange={(e) => setOthersForm({ ...othersForm, referralCode: e.target.value })}
                        className={inputNormal}
                      />
                    </div>

                    {/* --- TERMS AND CONDITIONS (OTHERS) --- */}
                    <div className="flex items-center gap-3 pl-2">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          id="terms-others"
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                          className="peer w-5 h-5 appearance-none rounded-full border border-white/30 bg-white/5 checked:bg-[#E500A4] checked:border-transparent transition-all cursor-pointer shrink-0"
                          required
                        />
                        <svg 
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <label htmlFor="terms-others" className="text-gray-300 text-sm cursor-pointer select-none">
                        Accept Terms & Conditions
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#E500A4] hover:bg-[#D40096] text-white text-base py-3 rounded-[15px] transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-white/20 shadow-[0_0_15px_rgba(229,0,164,0.3)]"
                    >
                      Register
                    </button>

                    <div className="text-center">
                      <p className="text-gray-300 text-sm">
                        Already have an account?{' '}
                        <a href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


