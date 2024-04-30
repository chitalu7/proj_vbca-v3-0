// // In ContractCard.jsx
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './ContractCard.css';

function ContractCard({ image, title, description, reward, trackLocation, atk, def, onTrack }) {
  const [isTracked, setIsTracked] = useState(false);
  const [isEngaged, setIsEngaged] = useState(false);
  

  const handleTrackClick = () => {
    onTrack();
    setIsTracked(true);
  };

  const handleEngageClick = () => {
    setIsEngaged(true);  // This will display atk/def and hide the link
  };

  return (
    <div>
      <Card className="contract-card">
        <Card.Img variant="top" src={image} />
        <Card.Body className="contract-card-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text><strong>Reward:</strong> {reward}</Card.Text>
          {!isTracked ?
            <Button variant="primary" onClick={handleTrackClick}>TRACK?</Button> :
            <>
              {!isEngaged ?
                <Button variant="success" onClick={handleEngageClick}>ENGAGE?</Button> :
                <>
                  <Card.Text><strong>Attack:</strong> {atk}</Card.Text>
                  <Card.Text><strong>Defense:</strong> {def}</Card.Text>
                </>
              }
              <Card.Text><strong>Location:</strong> {trackLocation}</Card.Text>
            </>
          }
          {!isEngaged && <div>
            <Link to="/dashboard">Back to Dashboard</Link>
          </div>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContractCard;

// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';

// import './ContractCard.css';

// function ContractCard({ image, title, description, reward, trackLocation, onTrack }) {
//   const [isTracked, setIsTracked] = useState(false);  // State to manage the button and location display

//   const handleTrackClick = () => {
//     onTrack();  // This should trigger the handleTrack in CarouselComponent
//     setIsTracked(true);  // Update the state to reveal the location and switch to "ENGAGE?" button
//   };
  

//   return (
//     <div>
//       <Card className="contract-card">
//         <Card.Img variant="top" src={image} />
//         <Card.Body className="contract-card-body">
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text><strong>Reward:</strong> {reward}</Card.Text>
//           {!isTracked ?
//             <Button variant="primary" onClick={handleTrackClick}>TRACK?</Button> :
//             <>
//               <Button variant="success">ENGAGE?</Button>
//               <Card.Text><strong>Location:</strong> {trackLocation}</Card.Text>
//             </>
//           }
//           <div>
//             <Link to="/dashboard">Back to Dashboard</Link>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default ContractCard;

// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';

// import './ContractCard.css';

// function ContractCard({ image, title, description, reward, trackLocation, onTrack }) {
//   const [isTracked, setIsTracked] = useState(false);  // State to manage the button display

//   const handleTrackClick = () => {
//     onTrack();  // Call the onTrack function passed from the parent component
//     setIsTracked(true);  // Update the local state to hide the "TRACK?" button and show "ENGAGE?"
//   };

//   return (
//     <div>
//       <Card className="contract-card">
//         <Card.Img variant="top" src={image} />
//         <Card.Body className="contract-card-body">
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text><strong>Reward:</strong> {reward}</Card.Text>
//           {!isTracked ? 
//             <Button variant="primary" onClick={handleTrackClick}>TRACK?</Button> :
//             <>
//               <Button variant="success">ENGAGE?</Button>
//               <Card.Text><strong>Location:</strong> {trackLocation}</Card.Text>
//             </>
//           }
//           <div>
//             <Link to="/dashboard">Back to Dashboard</Link>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default ContractCard;


// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';

// import './ContractCard.css';

// function ContractCard({ image, title, description, reward, trackLocation, onTrack }) {
//   return (
//     <div>
//       <Card className="contract-card">
//         <Card.Img variant="top" src={image} />
//         <Card.Body className="contract-card-body">
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text><strong>Reward:</strong> {reward}</Card.Text>
//           <Button variant="primary" onClick={onTrack}>TRACK?</Button>
//           <Card.Text><strong>Location:</strong> {trackLocation}</Card.Text>

//           <div>
//             <Link to="/dashboard">Back to Dashboard</Link>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default ContractCard;

// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';

// import './ContractCard.css'; 

// function ContractCard({ image, title, description, reward }) {  // Add 'reward' as a prop here
//   return (
//     <div>
//       <Card className="contract-card">
//         <Card.Img variant="top" src={image} />
//         <Card.Body className="contract-card-body">
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text className="reward-text">
//             <b>Reward: {reward}</b>
//           </Card.Text>
//           <Button variant="primary">TRACK?</Button>
//           <div>
//             <Link to="/dashboard">Back to Dashboard</Link>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default ContractCard;
