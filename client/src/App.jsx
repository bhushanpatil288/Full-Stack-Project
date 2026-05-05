import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages"
import { Layout } from "./components"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/authThunks";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCurrentUser())
  }, [])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Layout>
  )
}

export default App