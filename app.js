let dessertarray = [];
let votes = 25;

let dessert1 = new Dessert('bag', './img/bag.jpg');
let dessert2 = new Dessert('banana', './img/banana.jpg');
let dessert3 = new Dessert('bathroom','./img/bathroom.jpg');
let dessert4 = new Dessert('boots','./img/boots.jpg');
let dessert5 = new Dessert('breakfast', './img/breakfast.jpg');
let dessert6 = new Dessert('bubblegum', './img/bubblegum.jpg');
let dessert7 = new Dessert('chair', './img/chair.jpg');
let dessert8 = new Dessert('cthulhu', './img/cthulhu.jpg');
let dessert9 = new Dessert('dog-duck', './img/dog-duck.jpg');
let dessert10 = new Dessert('dragon', './img/dragon.jpg');
let dessert11 = new Dessert('pen', './img/pen.jpg');
let dessert12 = new Dessert('pet-sweep', './img/pet-sweep.jpg');
let dessert13 = new Dessert('scissors', './img/scissors.jpg');
let dessert14 = new Dessert('shark', './img/shark.jpg');
let dessert15 = new Dessert('sweep', './img/sweep.png');
let dessert16= new Dessert('tauntaun', './img/tauntaun.jpg');
let dessert17= new Dessert('unicorn', './img/unicorn.jpg');
let dessert18= new Dessert('water-can', './img/water-can.jpg');
let dessert19= new Dessert('wine-glass', './img/wine-glass.jpg');

dessertarray.push(dessert1,dessert2,dessert3,dessert4,dessert5,dessert6,dessert7,dessert8,dessert9,dessert10,dessert11,dessert12,dessert13,dessert14,dessert15,dessert16,dessert17,dessert18,dessert19);



let imageContainer = document.getElementById('img-container');
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');

let results = document.getElementById('results');
let resultscontainer = document.getElementById('results-container');

let chartcontext = document.getElementById('my-chart').getContext('2d');

function anydessert() {
  return Math.floor(Math.random() * dessertarray.length);
}

function showimages() {
  let firstimg = anydessert();
  let secondimg = anydessert();
  let thirdimg = anydessert();
  console.log('test');
  console.log(firstimg);
  while (firstimg === secondimg) {
    secondimg = anydessert();
  }
  while (firstimg === thirdimg) {
    thirdimg = anydessert();
  }
  while (secondimg === thirdimg) {
    thirdimg = anydessert();
  }
  first.src = dessertarray[firstimg].imagepath;
  second.src = dessertarray[secondimg].imagepath;
  third.src = dessertarray[thirdimg].imagepath;

  first.alt = dessertarray[firstimg].name;
  second.alt = dessertarray[secondimg].name;
  third.alt = dessertarray[thirdimg].name;

  dessertarray[firstimg].views++;
  dessertarray[secondimg].views++;
  dessertarray[thirdimg].views++;
}

function handleresults() {
  if (votes === 0) {
    let dessertNames = [];
    let dessertviews = [];
    let dessertclicks = [];


    for (let i = 0; i < dessertarray.length; i++) {
      dessertNames.push(dessertarray[i].name);
      dessertviews.push(dessertarray[i].views);
      dessertclicks.push(dessertarray[i].clicks);
    }
  }
}

let chartConfig = {
  type: 'bar',
  data: {
    labels: dessertNames,
    datasets: [{
      label: 'Amount of Views',
      data: dessertviews,
      backgroundColor: 'purple'
    }, {
      label: 'Amount of Clicks',
      data: dessertclicks,
      backgroundColor: 'orange'
    }],
  },
  options:{},
};

let mychart = new Chart(chartcontext, chartConfig);
results.removeEventListener('click', handleresults);

function handleclicks() {
  let dessertclicked = event.target.alt;

  console.log('image clicked >>>', dessertclicked);
  for (let i = 0; i < dessertarray.length; i++) {
    if(dessertarray[i].name === dessertclicked) {
      dessertarray[i].clicks++;
    }
  }

  votes--;

  showimages();

  if (votes === 0) {
    imageContainer.removeEventListener('click', handleclicks);
  }
}


function Dessert(name, imagepath) {
  this.name = name;
  this.imagepath = imagepath;
  this.clicks = 0;
  this.views = 0;
}






showimages();

imageContainer.addEventListener('click', handleclicks);
results.addEventListener('click', handleresults);

