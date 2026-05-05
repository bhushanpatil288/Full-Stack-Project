import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { userData } = useSelector(state => state.auth);
  
  if(!userData){
    return <Navigate to={"/"} replace />
  }

  return children;
}

export default ProtectedRoute