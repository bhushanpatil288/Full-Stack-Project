import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex h-[calc(100vh-148px)] justify-center items-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full max-w-md border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <form className="flex flex-col gap-6">
                    <div className="flex items-center justify-center gap-3 font-futuristic text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">
                        <i className="ri-lock-2-line text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta text-3xl"></i>
                        <span>System Login</span>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1.5 relative">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                            <div className="relative">
                                <i className="ri-user-3-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="email"
                                    placeholder="Enter identifier"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-neon-cyan focus:ring-4 focus:ring-neon-cyan/10 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white font-medium placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5 relative">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password</label>
                            <div className="relative">
                                <i className="ri-key-2-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="password"
                                    placeholder="Enter access code"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-neon-magenta focus:ring-4 focus:ring-neon-magenta/10 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white font-medium placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button type="button" className="w-full relative px-6 py-3.5 font-futuristic text-sm tracking-widest text-white uppercase overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(188,19,254,0.4)] transition-shadow duration-300 group/btn bg-gradient-to-r from-neon-cyan to-neon-magenta cursor-pointer">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10 font-bold drop-shadow-md flex items-center justify-center gap-2">
                                Authenticate <i className="ri-arrow-right-line transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                            </span>
                        </button>
                        <p className="text-center mt-4 text-gray-500">don&apos;t have and account ? <Link className="text-blue-500 hover:text-neon-magenta" to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login