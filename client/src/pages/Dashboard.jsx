import { useSelector } from "react-redux"


const Dashboard = () => {
  const { userData } = useSelector(state => state.auth);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">{userData.role === "admin" ? "Admin" : "User"} Dashboard</h1>
        <p>Hello 👋, {userData.name.split(" ")[0] + " " + userData.name.split(" ").reverse()[0]}</p>
      </div>
    </div>
  )
}

export default Dashboard