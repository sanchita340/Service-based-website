import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.message || 'Login failed');
      return;
    }

    localStorage.setItem('token', data.token);
localStorage.setItem('user', JSON.stringify(data.user)); 
    navigate('/')
    

  } catch (error) {
    console.error('Error:', error);
    alert('Unable to connect to the server');
  }

};


  

 
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eae4db] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lg sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Welcome Back!
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Login to your Daywell account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
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
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#CD785E] focus:ring-2 focus:ring-[#CD785E]/20"
            />
          </div>

          {message && (
            <p role="status" className="text-sm text-[#AC6049]">
              {message}
            </p>
          )}
          <button
    type="submit"
    className="w-full rounded-xl bg-[#CD785E] py-3 font-semibold text-white hover:bg-[#AC6049]"
>
     Login
   </button>
        
        </form>
      </div>
    </div>
  )
}

export default Login
