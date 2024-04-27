import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ContractCard from './ContractCard';
import { useEffect, useState } from 'react';


// Firebase imports
import { database } from '../../firebase-config';
import { ref, onValue } from 'firebase/database';


// Carousel Styling import
import './CarouselComponent.css';

function CarouselComponent() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: manage loading state

  useEffect(() => {
    const contractsRef = ref(database, 'profiles');
    onValue(contractsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedContracts = [];
      for (let id in data) {
        loadedContracts.push({
          id: id,
          image: data[id].imageUrl,
          title: data[id].name,
          description: data[id].bio
        });
      }
      setContracts(loadedContracts);
      setLoading(false); // Optional: update loading state
    }, {
      onlyOnce: false // Remove if you want real-time updates
    });
  }, []);

  return (
    <Carousel interval={null} indicators={false}>
      {loading ? <div>Loading...</div> : contracts.map((item) => (
        <Carousel.Item key={item.id}>
          <div className="d-flex justify-content-center">
            <ContractCard image={item.image} title={item.title} description={item.description} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;