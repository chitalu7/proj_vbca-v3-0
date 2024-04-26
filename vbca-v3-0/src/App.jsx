import { useState } from 'react'

// Import Authentication Provider
import { AuthProvider } from '../contexts/AuthContext.jsx'

// React routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Route Protector
import ProtectedRoute from './components/RouteProtection.jsx'

// Import components
import LandingPage from './pages/landing.jsx'
import LoginForm from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App
