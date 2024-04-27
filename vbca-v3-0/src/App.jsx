import { useState } from 'react'

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


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
import MissionBoard from './pages/missionboard.jsx'
import ContractProfileForm from './pages/ContractProfileForm.jsx';
// import { uploadImage, saveProfileToFirestore } from './firebaseUtilityFunctions';


// React-Slick imports for Carousel of cards
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const saveProfileToFirebase = async (name, bio, image) => {
    // Placeholder for the Firebase upload logic
    console.log(name, bio, image);
    // Here we will add the Firebase upload logic in the next tasks
  };

  const handleSave = async (name, bio, image) => {
    try {
        const imageUrl = await uploadImage(image); // Upload image and get URL
        await saveProfileToFirestore(name, bio, imageUrl); // Save all data to Firestore
        alert('Profile saved successfully!');
    } catch (error) {
        console.error('Error saving the profile:', error);
        alert('Error saving profile: ' + error.message);
    }
};
  



  return (
    <BrowserRouter>
      <AuthProvider>
        <nav className="top-nav">
          <h3>DOMINATIO ABSCONDITA</h3>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/missionboard" element={<ProtectedRoute><MissionBoard/></ProtectedRoute>} />
          <Route path="/contractprofileform" element={<ProtectedRoute><ContractProfileForm onSave={handleSave}/></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App
