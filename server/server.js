const express = require("express");
const app = express();
const PORT = 3001; 

// Import realtime database
const db = require('./services/firebaseAdmin');


app.get("/", (req, res) => {
    res.send("The Shadows whisper your name");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//const ref = db.ref('gameData/contracts/targetDetails');

// Suppose we have a contract ID "contract123" and we need to store target details
const targetRef = db.ref('gameData/contracts/targetDetails/contract123');

// Set the target details
targetRef.set({
  name: 'John Doe',
  location: 'Metropolis'
}).then(() => console.log('Data set successfully!'))
.catch(error => console.error('Error setting data:', error));

const targetRef2 = db.ref('gameData/contracts/targetDetails/contract124');

targetRef2.set({
    name: 'Jane Smith',
    location: 'Vezuvian Temple'
  }).then(() => console.log('Data set successfully!'))
  .catch(error => console.error('Error setting data:', error));

// Read the contract
targetRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  
targetRef2.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  targetRef2.update({
    location: "DeLuca's Heliport"
  }).then(() => console.log('Location updated successfully!'))
  .catch(error => console.error('Error updating location:', error));
  
  targetRef2.update({
    status: 'Active'
  })
  .then(() => console.log('Status added successfully!'))
  .catch(error => console.error('Error adding status:', error));

  targetRef.remove()
  .then(() => {
    console.log('Contract deleted successfully');
  })
  .catch((error) => {
    console.error('Error deleting contract:', error);
  });

  
  




