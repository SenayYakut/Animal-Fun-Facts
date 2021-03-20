import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const images = [];
for (const animal in animals) {
    images.push( <
        img key = { animal }
        className = 'animal'
        alt = { animal }
        src = { animals[animal].image }
        aria - label = { animal }
        role = 'button'

        /
        >
    )
};
const title = "";
const background = ( <
    img className = "background"
    alt = "ocean"
    src = "images/ocean.jpg" / >
);
const animalFacts = ( <
    div >
    <
    h1 > { title === "" ? "Click an animal for fun fact" : title } <
    /h1> { background } <
    div className = "animals" > { images } <
    /div> <
    /div>
);

const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);

function displayFact(e) {

}
ReactDOM.render(animalFacts, document.getElementById("root"));