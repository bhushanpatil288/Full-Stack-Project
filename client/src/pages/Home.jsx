import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AllTweets from "../components/AllTweets";

const Home = () => {
  const { userData } = useSelector(state => state.auth);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 flex flex-col md:flex-row items-center justify-center gap-3 mt-10">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Authentication
            </span>
            <span className="text-gray-700"> System</span>
          </h1>
          <div className="space-y-10">
            <p className="text-gray-500 text-lg">Advanced authentication system</p>
            <Link to={userData ? "/dashboard" : "/login"} className="cursor-pointer px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              {userData ?
                "Open Dashboard" :
                "Get Started"
              }
            </Link>
          </div>

          <div className="mt-20 container mx-auto">
            <h2 className="font-bold mb-10">Recent Tweets</h2>
            <AllTweets limit={3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home