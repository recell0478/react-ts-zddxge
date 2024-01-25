import * as React from 'react';
import './style.css';

export default function PetCard({ petData }) {
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 100)}...` : input;

  return (
  <div className="petCard">
    <img src={petData.img_url} className="petPic"/>
    <div className="container"> 
    <h3>{petData.pet_name}</h3>
    <p>{petData.pet_description}</p>
    </div>
  </div> 
  );
}
