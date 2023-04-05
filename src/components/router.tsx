import {Route, useNavigate, Navigate, useLocation} from 'react-router-dom';
import {PrivateRouteProps, PublicRouteProps} from '@/types/common.type';
import {isAuthenticated} from '@/utils/common';

const PrivateRoute: React.FC<PrivateRouteProps> = ({children, ...rest}) => {
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    navigate('/login');
    return null;
  }

  return <Route {...rest} element={children} />;
};

const PublicRoute: React.FC<PublicRouteProps> = ({
  element,
  redirectTo,
  ...rest
}) => {
  const location = useLocation();
  function isAuthenticated() {
    return false;
  }
  if (isAuthenticated()) {
    return <Navigate to={redirectTo || '/'} />;
  }

  return <Route {...rest} element={element} />;
};

export {PrivateRoute, PublicRoute};
