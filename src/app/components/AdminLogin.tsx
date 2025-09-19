'use client';

import { useState, useEffect } from 'react';
import { Mail, Lock, User, ArrowLeft, CheckCircle, XCircle, Clock } from 'lucide-react';
import { 
  sendVerificationEmail, 
  verifyEmailCode, 
  createVerificationSession, 
  isAdminEmail, 
  getAdminByEmail,
  createAdmin,
  updateAdminLogin
} from '../data/adminAuth';

type Props = {
  onLoginSuccess: (admin: any) => void;
  onBack: () => void;
};

export default function AdminLogin({ onLoginSuccess, onBack }: Props) {
  const [step, setStep] = useState<'email' | 'verification' | 'profile'>('email');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  // Timer for verification code
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Email không hợp lệ');
        setIsLoading(false);
        return;
      }

      // Check if email is admin
      if (!isAdminEmail(email)) {
        setError('Email này không có quyền admin. Vui lòng sử dụng email: quynhpvnse182895@fpt.edu.vn');
        setIsLoading(false);
        return;
      }

      // Create verification session
      const code = createVerificationSession(email);
      
      // Send verification email
      const emailSent = await sendVerificationEmail(email, code);
      
      if (emailSent) {
        setStep('verification');
        setTimeLeft(600); // 10 minutes
        setSuccess('Mã xác thực đã được gửi đến email của bạn');
      } else {
        setError('Không thể gửi email xác thực. Vui lòng thử lại.');
      }
    } catch (error) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Verify code
      const isValid = verifyEmailCode(email, verificationCode);
      
      if (!isValid) {
        setError('Mã xác thực không đúng hoặc đã hết hạn');
        setIsLoading(false);
        return;
      }

      // Get admin info
      const admin = getAdminByEmail(email);
      
      if (admin) {
        // Existing admin
        updateAdminLogin(admin.id);
        onLoginSuccess(admin);
      } else {
        // New admin - need to create profile
        setStep('profile');
        setSuccess('Mã xác thực thành công! Vui lòng hoàn thiện thông tin.');
      }
    } catch (error) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!name.trim()) {
        setError('Vui lòng nhập tên của bạn');
        setIsLoading(false);
        return;
      }

      // Create new admin
      const admin = createAdmin(email, name.trim());
      updateAdminLogin(admin.id);
      
      onLoginSuccess(admin);
    } catch (error) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    setError('');

    try {
      const code = createVerificationSession(email);
      const emailSent = await sendVerificationEmail(email, code);
      
      if (emailSent) {
        setTimeLeft(600);
        setSuccess('Mã xác thực mới đã được gửi');
      } else {
        setError('Không thể gửi email xác thực. Vui lòng thử lại.');
      }
    } catch (error) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔐</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Xác thực Admin
          </h1>
          <p className="text-gray-300">
            {step === 'email' && 'Nhập email để nhận mã xác thực'}
            {step === 'verification' && 'Nhập mã xác thực từ email'}
            {step === 'profile' && 'Hoàn thiện thông tin admin'}
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Quay lại</span>
        </button>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-red-400" />
            <span className="text-red-400">{error}</span>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-400 rounded-lg flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-400">{success}</span>
          </div>
        )}

        {/* Step 1: Email */}
        {step === 'email' && (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Admin
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="quynhpvnse182895@fpt.edu.vn"
                  required
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Email admin: quynhpvnse182895@fpt.edu.vn
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Đang gửi...</span>
                </>
              ) : (
                <>
                  <Mail className="h-5 w-5" />
                  <span>Gửi mã xác thực</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 2: Verification */}
        {step === 'verification' && (
          <form onSubmit={handleVerificationSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mã xác thực
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none text-center text-2xl font-mono"
                  placeholder="000000"
                  maxLength={6}
                  required
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-400">
                  Mã xác thực đã được gửi đến {email}
                </p>
                {timeLeft > 0 && (
                  <p className="text-xs text-yellow-400 flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(timeLeft)}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={isLoading || verificationCode.length !== 6}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Đang xác thực...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Xác thực</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleResendCode}
                disabled={isLoading || timeLeft > 0}
                className="w-full bg-white/10 hover:bg-white/20 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg transition-colors"
              >
                Gửi lại mã ({timeLeft > 0 ? formatTime(timeLeft) : 'Sẵn sàng'})
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Profile */}
        {step === 'profile' && (
          <form onSubmit={handleProfileSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tên Admin
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="Nhập tên của bạn"
                  required
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Email: {email}
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading || !name.trim()}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Đang tạo tài khoản...</span>
                </>
              ) : (
                <>
                  <User className="h-5 w-5" />
                  <span>Hoàn thành</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            🔒 Xác thực bảo mật bằng email
          </p>
        </div>
      </div>
    </div>
  );
}
