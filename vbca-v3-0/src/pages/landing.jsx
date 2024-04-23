import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate('/login');
  }

  return (
    <>
        <h1> Landing Page</h1>
        <button onClick={handleNavigateToLogin}>Patron</button>
   
    </>
  )
}

export default LandingPage;



