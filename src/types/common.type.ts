import {RouteProps} from 'react-router-dom';

export interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  children: React.ReactNode;
}

export interface PublicRouteProps {
  path: string;
  element: React.ReactNode;
  redirectTo?: string;
}
