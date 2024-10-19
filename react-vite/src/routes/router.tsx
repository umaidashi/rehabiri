import { lazy } from 'react';
import type { RouteObject, RouteProps } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

const Dashboard = lazy(async () => await import('@/pages'));

const router = [
  {
    path: "/",
    element: <Dashboard />,
  },
] as const satisfies RouteProps[];


export const AppRoutes: React.FC = () => {
  const element = useRoutes(router as RouteObject[]);

  return element;
}
