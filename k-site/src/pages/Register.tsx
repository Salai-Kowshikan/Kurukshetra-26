import { useState } from 'react';
import { Mail, User, Phone, CreditCard, Calendar, Building2, GraduationCap, BookOpen, MapPin, Lock, Eye, EyeOff, Tag } from 'lucide-react';
import spaceBg from '@/assets/Gemini_Generated_Image_5t3qd85t3qd85t3q.png';

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
    dobMonth: 'January',
    dobYear: '2026',
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

  return (
    <div className="min-h-screen relative flex items-center justify-center lg:justify-end px-4 pt-20 pb-12 lg:pr-12 xl:pr-24 overflow-hidden"
         style={{
           backgroundImage: `url(${spaceBg})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="w-full max-w-md relative z-10">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Title */}
          <h1 
            className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#6101FE] to-[#FF00B3] bg-clip-text text-transparent"
            style={{
              fontFamily: "'Stalinist One', ui-serif, Georgia, serif"
            }}
          >
            REGISTER FOR K! 26
          </h1>

          {/* Tab Switcher */}
          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab('cegian')}
              className={`flex-1 py-2.5 px-4 rounded-lg transition-all font-extrabold text-lg ${
                activeTab === 'cegian'
                  ? 'bg-slate-900 bg-gradient-to-r from-[#6101FE] to-[#FF00B3] bg-clip-text text-transparent border border-slate-600'
                  : 'bg-slate-800/30 text-gray-400 border border-slate-700/30 hover:bg-slate-800/50'
              }`}
              style={{ fontFamily: "'Stalinist One', ui-serif, Georgia, serif" }}
            >
              CEGian
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('others')}
              className={`flex-1 py-2.5 px-4 rounded-lg transition-all font-extrabold text-lg ${
                activeTab === 'others'
                  ? 'bg-slate-900 bg-gradient-to-r from-[#6101FE] to-[#FF00B3] bg-clip-text text-transparent border border-slate-600'
                  : 'bg-slate-800/30 text-gray-400 border border-slate-700/30 hover:bg-slate-800/50'
              }`}
              style={{ fontFamily: "'Stalinist One', ui-serif, Georgia, serif" }}
            >
              Others
            </button>
          </div>

          {/* Forms */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email ID - Common */}
            <div>
              <label className="block text-orange-400 text-sm font-medium mb-2">
                Email ID
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={activeTab === 'cegian' ? cegianForm.email : othersForm.email}
                  onChange={(e) => {
                    if (activeTab === 'cegian') {
                      setCegianForm({ ...cegianForm, email: e.target.value });
                    } else {
                      setOthersForm({ ...othersForm, email: e.target.value });
                    }
                  }}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Full Name - Common */}
            <div>
              <label className="block text-orange-400 text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={activeTab === 'cegian' ? cegianForm.firstName : othersForm.firstName}
                    onChange={(e) => {
                      if (activeTab === 'cegian') {
                        setCegianForm({ ...cegianForm, firstName: e.target.value });
                      } else {
                        setOthersForm({ ...othersForm, firstName: e.target.value });
                      }
                    }}
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={activeTab === 'cegian' ? cegianForm.lastName : othersForm.lastName}
                  onChange={(e) => {
                    if (activeTab === 'cegian') {
                      setCegianForm({ ...cegianForm, lastName: e.target.value });
                    } else {
                      setOthersForm({ ...othersForm, lastName: e.target.value });
                    }
                  }}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Mobile - Common */}
            <div>
              <label className="block text-orange-400 text-sm font-medium mb-2">
                Mobile
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 text-sm">+91</span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={activeTab === 'cegian' ? cegianForm.mobile : othersForm.mobile}
                  onChange={(e) => {
                    if (activeTab === 'cegian') {
                      setCegianForm({ ...cegianForm, mobile: e.target.value });
                    } else {
                      setOthersForm({ ...othersForm, mobile: e.target.value });
                    }
                  }}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-24 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* CEGian-specific fields */}
            {activeTab === 'cegian' && (
              <>
                {/* Roll Number */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    Roll Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="202XXXXXXX"
                      value={cegianForm.rollNumber}
                      onChange={(e) => setCegianForm({ ...cegianForm, rollNumber: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    Date of Birth
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="number"
                        min="1"
                        max="31"
                        placeholder="1"
                        value={cegianForm.dobDay}
                        onChange={(e) => setCegianForm({ ...cegianForm, dobDay: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-2 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                        required
                      />
                    </div>
                    <select
                      value={cegianForm.dobMonth}
                      onChange={(e) => setCegianForm({ ...cegianForm, dobMonth: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-2 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                      required
                    >
                      {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      min="1900"
                      max="2026"
                      placeholder="2026"
                      value={cegianForm.dobYear}
                      onChange={(e) => setCegianForm({ ...cegianForm, dobYear: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-2 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    Department
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Department"
                      value={cegianForm.department}
                      onChange={(e) => setCegianForm({ ...cegianForm, department: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    Year
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={cegianForm.year}
                      onChange={(e) => setCegianForm({ ...cegianForm, year: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none text-sm"
                      required
                    >
                      <option value="">Select Year Of Study</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Others-specific fields */}
            {activeTab === 'others' && (
              <>
                {/* College */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    College
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="College"
                      value={othersForm.college}
                      onChange={(e) => setOthersForm({ ...othersForm, college: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    Department
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Department"
                      value={othersForm.department}
                      onChange={(e) => setOthersForm({ ...othersForm, department: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    Year
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={othersForm.year}
                      onChange={(e) => setOthersForm({ ...othersForm, year: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none text-sm"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                </div>

                {/* State */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    State
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="State"
                      value={othersForm.state}
                      onChange={(e) => setOthersForm({ ...othersForm, state: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-orange-400 text-sm font-medium mb-2">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={othersForm.city}
                      onChange={(e) => setOthersForm({ ...othersForm, city: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none text-sm"
                      required
                    >
                      <option value="">Select city</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Bangalore">Bangalore</option>
                      {/* Add more cities as needed */}
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Password - Common */}
            <div>
              <label className="block text-orange-400 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={activeTab === 'cegian' ? cegianForm.password : othersForm.password}
                  onChange={(e) => {
                    if (activeTab === 'cegian') {
                      setCegianForm({ ...cegianForm, password: e.target.value });
                    } else {
                      setOthersForm({ ...othersForm, password: e.target.value });
                    }
                  }}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-12 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password - Common */}
            <div>
              <label className="block text-orange-400 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={activeTab === 'cegian' ? cegianForm.confirmPassword : othersForm.confirmPassword}
                  onChange={(e) => {
                    if (activeTab === 'cegian') {
                      setCegianForm({ ...cegianForm, confirmPassword: e.target.value });
                    } else {
                      setOthersForm({ ...othersForm, confirmPassword: e.target.value });
                    }
                  }}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-12 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Referral Code - Others only */}
            {activeTab === 'others' && (
              <div>
                <label className="block text-orange-400 text-sm font-medium mb-2">
                  Referral Code <span className="text-gray-500">(optional)</span>
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Referral Code"
                    value={othersForm.referralCode}
                    onChange={(e) => setOthersForm({ ...othersForm, referralCode: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-12 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
              </div>
            )}

            {/* Terms & Conditions */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 bg-slate-800/50 border border-slate-600 rounded focus:ring-2 focus:ring-purple-500"
                required
              />
              <label htmlFor="terms" className="text-gray-400 text-sm">
                Accept Terms & Conditions
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-2.5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/50 text-sm"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
