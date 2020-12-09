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
  this.fact = [fact];
}

// Create Dino Objects

// Create Human Object
// Use IIFE to get human data from form
const Human = function () {
  return (function () {
    const name = document.getElementById('name').value
      ? document.getElementById('name').value
      : 'noname';
    const height = document.getElementById('inches').value
      ? document.getElementById('inches').value
      : 0;
    const weight = document.getElementById('weight').value
      ? document.getElementById('weight').value
      : 0;
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

//change feet to inches

function feetToInches() {
  const feet = document.getElementById('feet').value;
  document.getElementById('inches').value = (
    Math.round(feet * 12 * 10) / 10
  ).toLocaleString();
}

function inchesToFeet() {
  const inches = document.getElementById('inches').value;
  document.getElementById('feet').value = (
    Math.round((inches / 12) * 10) / 10
  ).toLocaleString();
}

// Create Dino Compare Method 1
function compareWeight(human) {
  this.fact.push(
    this.weight > human.getWeight()
      ? 'This dinosaur is heavier than you'
      : 'You are heavier than this dinosaur'
  );
}

// Create Dino Compare Method 2
function compareHeight(human) {
  this.fact.push(
    this.height > human.getHeight()
      ? 'This dinosaur is taller than you'
      : 'You are taller than this dinosaur'
  );
}

// Create Dino Compare Method 3
function compareDiet(human) {
  this.fact.push(
    this.diet === human.getDiet()
      ? 'This dinosaur has the same diet as you'
      : 'This dinosaur has a different diet from you'
  );
}

// Generate Tiles for each Dino in Array
function generateTiles(human, dinos) {
  const humanTile = `<div class='grid-item'>
      <h3>${human.getName()}</h3>
      <img src='${'./images/human.png'}' alt='dinosaur' />
    </div>`;

  const dinoTiles = dinos.map((dino) => {
    const fact =
      dino.species === 'Pigeon'
        ? dino.fact[0]
        : dino.fact[Math.floor(Math.random() * dino.fact.length)];
    const tile = `<div class='grid-item'>
      <h3>${dino.species}</h3>
      <img src='${dino.image}' alt='dinosaur' />
      <div class='text-box'>
        <p>${fact}</p>
      </div>
    </div>`;
    return tile;
  });

  const tiles = [...dinoTiles.slice(0, 4), humanTile, ...dinoTiles.slice(4, 9)];

  return tiles;
}

// Add tiles to DOM
function addTiles(human, dinos) {
  const tiles = generateTiles(human, dinos);
  document.getElementById('grid').innerHTML = tiles.join('');
  hideForm();
}

// Remove form from screen
function hideForm() {
  document.getElementById('dino-compare').style.display = 'none';
  resetForm();
}

// On button click, prepare and display infographic
async function clickButtion() {
  const human = Human();
  const dinos = await fetch('./dino.json')
    .then((response) => response.json())
    .then((json) => {
      const dinos = [];
      json.Dinos.map((data) => {
        const dino = new Dino(data);
        compareWeight.call(dino, human);
        compareHeight.call(dino, human);
        compareDiet.call(dino, human);
        dinos.push(dino);
      });
      return dinos;
    });

  addTiles(human, dinos);
}
