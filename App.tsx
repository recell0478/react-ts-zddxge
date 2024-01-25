import * as React from 'react';
import { useState } from 'react';
import AdoptedDogCounter from './adoptedDogCounter';
import HeaderComponent from './headerComponent';
import PetCard from './petCard';
import petData from './mock-data'
import './style.css';

// 1. Create counter
// 2. Create pet card
// 3. iterate through pet data

// --- lost? stuff doesn't work? catch up at this checkpoint!:
// https://stackblitz.com/edit/react-ts-klb3mt?file=App.tsx

// 4. Create adopt button
// 5. Connect state for button and adopt dog tag

export default function App() {
  const [dogsAdopted, setDogsAdopted] = useState(0);
  return (
    <div className="body">
      <HeaderComponent />
      <AdoptedDogCounter dogsAdopted={dogsAdopted} />
      {petData.map((pet) => {
        return (
          <div className="grid-item">
          <PetCard petData={pet} />
        </div>
        );
    })}
    </div>
  );
}
