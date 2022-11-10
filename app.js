let dessertarray = [];
let votes = 25;

let dessert1 = new Dessert('Sprinkled donut', './img/donut1.webp');
let dessert2 = new Dessert('Vanilla donut', './img/donut2.jpeg');
let dessert3 = new Dessert('Bear donut','./img/donut3.webp');
let dessert4 = new Dessert('Chocolate donut','./img/donut4.jpeg');
let dessert5 = new Dessert('Chocolate donut 2', './img/donut5.webp');
let dessert6 = new Dessert('Chocolate sprinkle donut', './img/donut6.jpeg');
let dessert7 = new Dessert('Strawberry donut', './img/donut7.webp');
let dessert8 = new Dessert('Fruit donuts', './img/donut8.jpeg');
let dessert9 = new Dessert('assorted chocolate donut', './img/donut9.webp');
let dessert10 = new Dessert('Chocolate cake', './img/cake1.jpeg');
let dessert11 = new Dessert('Cheese cake', './img/cheesecake.jpeg');
let dessert12 = new Dessert('Cinnamon roll', './img/cinnamonroll.jpeg');
let dessert13 = new Dessert('Chocolate Crossaint', './img/crossaint1.webp');
let dessert14 = new Dessert('Cupcakes', './img/cupcake.jpeg');
let dessert15 = new Dessert('Dessert', './img/dessert.webp');
let dessert16= new Dessert('Japanese Dessert', './img/dessert2.webp');

dessertarray.push(dessert1,dessert2,dessert3,dessert4,dessert5,dessert6,dessert7,dessert8,dessert9,dessert10,dessert11,dessert12,dessert13,dessert14,dessert15,dessert16);



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

