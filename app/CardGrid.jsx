import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function ColumnContent() {
  // Initialize places state with an empty array
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Retrieve places from local storage and parse it to JSON
    const storedPlaces = JSON.parse(localStorage.getItem('places') || '[]');
    // Set the retrieved places to the places state without duplicates
    setPlaces(prevPlaces => {
      // Filter out any duplicates based on a unique identifier (e.g., title, id, etc.)
      const uniqueStoredPlaces = storedPlaces.filter(storedPlace => 
        !prevPlaces.some(prevPlace => prevPlace.title === storedPlace.title)
      );
      // Merge existing places with unique stored places
      return [...prevPlaces, ...uniqueStoredPlaces];
    });
  }, []);  

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3">
        {/* Map over the places array to dynamically render Card components */}
        {places.map((place, index) => (
          <div key={index} className="relative">
            <div className="p-4"> 
              <Card 
                title={place.title} 
                info={place.info} 
                img={place.img} 
                userName={place.userName} 
                location={place.location} // If you have location in your place object
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ThreeColumnGrid() {
  return <ColumnContent />;
}

export default ThreeColumnGrid;
