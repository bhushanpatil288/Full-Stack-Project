import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages"
import { Layout } from "./components"

const App = () => {
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