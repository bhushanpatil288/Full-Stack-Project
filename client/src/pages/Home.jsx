import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { userData } = useSelector(state => state.auth);

  return (
    <div>
      <div className="flex items-center justify-center h-[calc(100vh-148px)]">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Authentication
            </span>
            <span className="text-gray-700"> System</span>
          </h1>
          <div className="space-y-4">
            <p className="text-gray-500 text-lg">Advanced authentication system</p>
            <Link   to={userData ? "/dashboard" : "/login"} className="cursor-pointer px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              {userData ? 
                "Open Dashboard":
                "Get Started"
              }
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home