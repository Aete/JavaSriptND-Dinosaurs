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
const Human = function () {
  return (function () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('feet').value
      ? document.getElementById('feet').value
      : document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;
    return {
      getName: function () {
        return name;
      },
      getHeight: function () {
        return height;
      },
      getWeight: function () {
        return weight;
      },
      getDiet: function () {
        return diet;
      },
    };
  })();
};

// reset the form when the 'Compare' butten is clicked
function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('feet').value = '';
  document.getElementById('inches').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('diet').value = 'Herbavor';
}

// Create Dino Compare Method 1
const compareWeight = (weight) => {
  const human = Human();
  const humanWeight = human.getWeight();
  return weight > humanWeight
    ? 'This dinosaur is heavier than you'
    : 'You are heavier than this dinosaur';
};
// Create Dino Compare Method 2
const compareHeight = (height) => {
  const human = Human();
  const humanHeight = human.getHeight();
  return height > humanHeight
    ? 'This dinosaur is taller than you'
    : 'You are taller than this dinosaur';
};

// Create Dino Compare Method 3
const compareDiet = (diet) => {
  const human = Human();
  const humanDiet = human.getDiet();
  return diet === humanDiet
    ? 'This dinosaur has the same diet as you'
    : 'This dinosaur has a different diet from you';
};

// Generate Tiles for each Dino in Array
function GenerateTiles() {
  const tiles = [];
  dinos.map((dino) => {
    const tile = document.createElement('div');
    title.className = 'grid-item';

    tiles.push(tile);
  });
}

// Add tiles to DOM

// Remove form from screen
function HideForm() {
  document.getElementById('dino-compare').style.visibility = 'hidden';
}

// On button click, prepare and display infographic
