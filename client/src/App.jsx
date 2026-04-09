import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from './store/useAuthStore'

import AuthLayout from './pages/AuthLayout';
import LibraryPage from './pages/LibraryPage';

export default function App() {
  const isAutheticated = useAuthStore((state) => state.isAuthenticated);

  return (
    //Auth Route
    //If user is not Authenticated, redirect to /auth
    //Main Route
    //If user is Authenticated, redirect to /home
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={!isAutheticated ? <AuthLayout /> : <Navigate to="/" replace />} />
        <Route path="/" element={isAutheticated ? <LibraryPage /> : <Navigate to="/auth" replace />} />
      </Routes>
    </BrowserRouter>
  );
}