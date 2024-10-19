import type { PropsWithChildren } from "react";
import { BrowserRouter } from 'react-router-dom'

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

