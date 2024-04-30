// CarouselComponent.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ContractCard from './ContractCard';
import { useEffect, useState } from 'react';

// Firebase imports
import { database } from '../../firebase-config';
import { ref, onValue, update } from 'firebase/database';


// Carousel Styling import
import './CarouselComponent.css';

const locations = [
];

function CarouselComponent() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: manage loading state

  useEffect(() => {
    const contractsRef = ref(database, 'profiles');
    onValue(contractsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedContracts = [];
      if (data) {
        for (let id in data) {
          // Push all necessary fields from the Firebase data
          loadedContracts.push({
            id: id,
            image: data[id].imageUrl,
            title: data[id].name,
            description: data[id].bio,
            consequencesStatus: data[id].consequencesStatus,
            consequences: data[id].consequences,
            atk: data[id].atk,
            def: data[id].def,
            contractType: data[id].contractType,
            reward: data[id].reward,
            location: data[id].location,
            rules: data[id].rules,
            closer: data[id].closer,
            lockOnStatus: data[id].lockOnStatus,
            objective: data[id].objective,
            trackingStatus: data[id].trackingStatus,
            contractStatus: data[id].contractStatus,
            trackLocation: locations[Math.floor(Math.random() * locations.length)] // Initial random track location

          });
        }
      }
      setContracts(loadedContracts);
      setLoading(false); // Optional: update loading state
    }, {
      onlyOnce: false // Remove if you want real-time updates
    });
  }, []);

  const handleTrack = (id) => {
    const contractRef = ref(database, `profiles/${id}`);
    update(contractRef, { trackingStatus: true })  // Update trackingStatus to true
      .then(() => {
        setContracts(prevContracts =>
          prevContracts.map(contract =>
            contract.id === id ? { ...contract, trackingStatus: true } : contract
          )
        );
      })
      .catch(error => {
        console.error('Error updating track status:', error);
      });
  };


  return (
    <div className='carousel-container'>

      <Carousel interval={null} indicators={false}>
            {loading ? <div>Loading...</div> : contracts.map((item) => (
              <Carousel.Item key={item.id}>
                <div className="d-flex justify-content-center">
                  <ContractCard 
                  image={item.image} 
                  title={item.title} 
                  description={item.description} 
                  reward={item.reward}
                  trackLocation={item.trackLocation}
                  atk={item.atk} 
                  def={item.def}
                  onTrack={() => handleTrack(item.id)}
                  />
                </div>
              </Carousel.Item>
            ))}
      </Carousel>


    </div>
    
  );
}

export default CarouselComponent;

