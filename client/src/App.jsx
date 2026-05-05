import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages"
import { Layout } from "./components"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/authThunks";

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
      </Routes>
    </Layout>
  )
}

export default App