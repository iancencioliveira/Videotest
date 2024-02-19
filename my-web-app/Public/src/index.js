fetch('/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process the retrieved product data
        displayProductData(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function displayProductData(products) {
    // Assuming products is an array of product objects
    products.forEach(product => {
        console.log('Product ID:', product.id);
        console.log('Product Name:', product.name);
        console.log('Product Price:', product.price);
        // You can display more product information or update your UI here
    });
}


import React from 'react';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div>
      <h1>Welcome to My Online Store</h1>
      <ProductDetails />
    </div>
  );
}

export default App;

document.addEventListener('DOMContentLoaded', function() {
    var player = videojs('productVideo');
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Video.js player
    var player = videojs('productVideo');

    // Play the video when the play button is clicked
    document.getElementById('playButton').addEventListener('click', function() {
        player.play();
    });

    // Pause the video when the pause button is clicked
    document.getElementById('pauseButton').addEventListener('click', function() {
        player.pause();
    });

    // Seek to a specific time (in seconds) when the seek button is clicked
    document.getElementById('seekButton').addEventListener('click', function() {
        var timeToSeek = 30; // Seek to 30 seconds
        player.currentTime(timeToSeek);
    });

    // Change the volume when the volume range input is adjusted
    document.getElementById('volumeRange').addEventListener('input', function() {
        var volume = this.value; // Get the volume value from the input element
        player.volume(volume); // Set the volume of the player
    });
});
