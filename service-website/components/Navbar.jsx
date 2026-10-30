import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const[menuOpen,setMenuOpen]= useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(localStorage.getItem('token')),
  );
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    <nav className=" relative bg-[#F4F0E8] px-4 py-4 sm:px-6">
        <div className="flex w-full flex-wrap items-center justify-between gap-y-3">
        
            <Link to="/" className="text-2xl font-bold text-[#172A3A]">
             Daywell
            </Link>
            <div className="hidden items-center gap-6 text-base text-black md:flex">
                <Link to="/" className="hover:text-[#F28B65]">Home</Link>
                <Link to="/services" className="hover:text-[#F28B65]">Services</Link>
                <Link to="/about" className="hover:text-[#F28B65]">About</Link>
                <Link to="/blog" className="hover:text-[#F28B65]">Blog</Link>
                   </div>
            <div className="flex items-center gap-4">

                {isLoggedIn ? (
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="rounded-full bg-black px-4 py-2 text-white hover:text-[#F28B65]"
                    >
                      Logout
                    </button>
                ) : (
                    <Link
                      to="/login"
                      className="rounded-full bg-black px-4 py-2 text-white hover:text-[#F28B65]"
                    >
                      Login
                    </Link>


                )}
                <Link
                  to="/signup"
                      className="rounded-full bg-black px-4 py-2 text-white hover:text-[#F28B65]"
                    > Signup</Link>


               <Link to="/cart" aria-label="Shopping cart" className="text-xl">
                🛒
                
               </Link>
               <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#172A3A] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
            </div>
            

        </div>
        {menuOpen && (
  <div className="absolute left-0 top-full z-80 flex w-full flex-col gap-4 border-t border-gray-200 bg-[#dcdad4] p-5 text-black shadow-md md:hidden">
    <Link to="/" onClick={() => setMenuOpen(false)}
      className="hover:text-[#F28B65]">
      Home
    </Link>

    <Link to="/services" onClick={() => setMenuOpen(false)}
      className="hover:text-[#F28B65]">
      Services
    </Link>

    <Link to="/about" onClick={() => setMenuOpen(false)}
      className="hover:text-[#F28B65]">
      About
    </Link>

    <Link to="/blog" onClick={() => setMenuOpen(false)}
      className="hover:text-[#F28B65]">
      Blog
    </Link>
  </div>
)}
            
      

    </nav>
  )
}

export default Navbar
