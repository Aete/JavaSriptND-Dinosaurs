<<<<<<< Updated upstream

    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form

=======
//Create Animal Constructor

function Animal({ species, weight, height, diet }) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.image = `./images/${species.toLowerCase()}.png`;
}

// Create Dino Constructor
function Dino({ species, weight, height, diet, where, when, fact }) {
  Animal.call(this, { species, weight, height, diet });
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects
const dinos = [];

fetch('./dino.json')
  .then((response) => response.json())
  .then((json) => {
    json.Dinos.map((data) => {
      const dino = new Dino(data);
      dinos.push(dino);
    });
  });

// Create Human Object
// Use IIFE to get human data from form
function Human(name, weight, height, diet) {
  const species = 'Human';
  Animal.call(this, { species, weight, height, diet });
  this.name = name;
}

const getHumanData = function () {
  (function () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('feet').value
      ? document.getElementById('feet').value
      : document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;
    return new Human(name, weight, height, diet);
  })();
};

// reset the form when the 'Compare' butten is clicked
function CreateHuman() {
  getHumanData();
  document.getElementById('name').value = '';
  document.getElementById('feet').value = '';
  document.getElementById('inches').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('diet').value = 'Herbavor';
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function methodOne() {}
// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
>>>>>>> Stashed changes

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

<<<<<<< Updated upstream
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
=======
// Generate Tiles for each Dino in Array
function GenerateTiles() {
  const tiles = [];
  dinos.map((dino) => {
    const tile = document.createElement('div');
    title.className = 'grid-item';

    tiles.push(tile);
  });
}
>>>>>>> Stashed changes

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen

<<<<<<< Updated upstream
=======
// Remove form from screen
function HideForm() {
  document.getElementById('dino-compare').style.visibility = 'hidden';
}
>>>>>>> Stashed changes

// On button click, prepare and display infographic
