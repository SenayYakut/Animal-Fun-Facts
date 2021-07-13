import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const background = (
  <img 
    className="background"
    alt = "ocean"
    src = '/images/ocean.jpg' />
);

const images = [];
for(const animal in animals){
  images.push(
    <img
      key={animal}
      className='animal'
      alt= {animal}
      src= {animals[animal].image}
      aria-label= {animal}
      role= 'button'
      onClick={displayFacts}/>
  )
};

const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title === "" ? 'Click an animal for a fun fact' : title} </h1>
    {showBackground === true && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

function displayFacts(e){
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const randomAnimalFactInd = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[randomAnimalFactInd];
  document.getElementById("fact").innerHTML = funFact;
};


ReactDOM.render(
  animalFacts,
  document.getElementById("root")
);