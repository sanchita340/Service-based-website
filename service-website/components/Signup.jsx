
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [awaitingVerification, setAwaitingVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isResending, setIsResending] = useState(false);

  // Register the user and request an OTP
  async function handleSignup(event) {
    event.preventDefault();
    setMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || 'Signup failed');
        return;
      }

      setAwaitingVerification(true);
      setMessage(
        `${data.message || 'Verification code sent.'} Check your inbox and spam folder.`
      );
      setName('');
      setPassword('');
    } catch (error) {
      console.error('Signup request failed:', error);
      setMessage('Unable to connect to the server. Please try again.');
    }
  }

  async function handleResend() {
    setMessage('');
    setIsSuccess(false);
    setIsResending(true);

    try {
      const response = await fetch('/api/auth/resendotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || 'Could not resend the verification code.');
        return;
      }

      setIsSuccess(true);
      setMessage(data.message);
    } catch (error) {
      console.error('OTP resend request failed:', error);
      setMessage('Unable to connect to the server. Please try again.');
    } finally {
      setIsResending(false);
    }
  }

  // Verify OTP and redirect to the homepage
  async function handleVerify(event) {
    event.preventDefault();
    setMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch('/api/auth/verifyotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || 'Email verification failed');
        return;
      }

      setIsVerified(true);
      setIsSuccess(true);
      setMessage('Email verified successfully! Welcome to Daywell.');
      setOtp('');

      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error('Email verification request failed:', error);
      setMessage('Unable to connect to the server. Please try again.');
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eae4db] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lg sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Join Daywell to make home care easier
        </p>

        {!awaitingVerification ? (
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#CD785E] focus:ring-2 focus:ring-[#CD785E]/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#CD785E] focus:ring-2 focus:ring-[#CD785E]/20"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="At least 6 characters"
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#CD785E] focus:ring-2 focus:ring-[#CD785E]/20"
              />
            </div>

            {message && (
              <p
                role="status"
                className={`text-sm ${
                  isSuccess ? 'text-green-700' : 'text-[#AC6049]'
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#CD785E] py-3 font-semibold text-white hover:bg-[#AC6049]"
            >
              Sign Up
            </button>
          </form>
        ) : !isVerified ? (
          <form onSubmit={handleVerify} className="space-y-5">
            <div>
              <label
                htmlFor="otp"
                className="mb-2 block font-medium text-gray-700"
              >
                Verification code
              </label>
              <input
                id="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]{6}"
                maxLength={6}
                placeholder="Enter the 6-digit code"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#CD785E] focus:ring-2 focus:ring-[#CD785E]/20"
              />
            </div>

            {message && (
              <p
                role="status"
                className={`text-sm ${
                  isSuccess ? 'text-green-700' : 'text-[#AC6049]'
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#CD785E] py-3 font-semibold text-white hover:bg-[#AC6049]"
            >
              Verify email
            </button>
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="w-full rounded-xl border border-[#CD785E] py-3 font-semibold text-[#AC6049] hover:bg-[#F4F0E8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isResending ? 'Sending code...' : 'Resend code'}
            </button>
          </form>
        ) : (
          <p className="text-center font-medium text-green-700" role="status">
            {message}
          </p>
        )}

        {!isVerified && !awaitingVerification && (
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-[#AC6049] hover:underline"
            >
              Log in
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}

export default Signup;
