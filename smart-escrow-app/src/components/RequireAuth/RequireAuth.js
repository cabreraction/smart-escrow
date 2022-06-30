import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router';

function RequireAuth({ children, type }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }  
  if (!type) {
    return children;
  }

  if (type && user.type === type) {
    return children;
  }

  return <Navigate to="/escrows-history" state={{ from: location }} replace />;
}

export default RequireAuth;