import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useEffect } from "react";

const navItems = [
  {
    title: "Home",
    path: "/"
  }, {
    title: "About",
    path: "/about"
  }, {
    title: "Contact",
    path: "/contact"
  }
]

const Header = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(()=>{

  }, [userData])
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-void/80 backdrop-blur-lg border-b border-neon-cyan/30 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-neon-cyan opacity-20 blur-md rounded-full group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative w-6 h-6 border-2 border-neon-cyan rounded-sm transform rotate-45 group-hover:rotate-180 transition-transform duration-700"></div>
            <div className="absolute w-2 h-2 bg-neon-magenta rounded-full shadow-[0_0_8px_rgba(188,19,254,1)]"></div>
          </div>
          <span className="font-futuristic text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta drop-shadow-[0_0_8px_rgba(0,243,255,0.4)]">
            AuthSystem
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navItems.map((item, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-futuristic text-sm tracking-[0.2em] uppercase transition-all duration-300 py-2 group ${isActive
                      ? "text-neon-cyan drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]"
                      : "text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.title}
                      {/* Hover underline effect */}
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-cyan to-neon-magenta transition-transform duration-300 origin-left ${isActive ? 'scale-x-100 shadow-[0_0_10px_rgba(0,243,255,0.8)]' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                      {/* Top decorative dot for active item */}
                      {isActive && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-magenta rounded-full shadow-[0_0_5px_rgba(188,19,254,1)] animate-pulse"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className="relative px-6 py-2 font-futuristic text-xs tracking-widest text-neon-cyan uppercase overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 border border-neon-cyan/50 group-hover:border-neon-cyan transition-colors duration-300 skew-x-[-20deg]"></div>
            <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-x-[-20deg]"></div>
            {userData ?
              <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" onClick={() => dispatch(logout())}>Logout</span>
              :
              <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" onClick={() => navigate("/login")}>System_Login</span>
            }
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header