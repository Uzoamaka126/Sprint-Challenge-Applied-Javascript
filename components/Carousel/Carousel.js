/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function createCarousel() {
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');

  const img1 = document.createElement('img');
  img1.src = "./assets/carousel/mountains.jpeg";
  img1.classList.add('active')

  const img2 = document.createElement('img');
  img2.src =  "./assets/carousel/computer.jpeg";

  const img3 = document.createElement('img');
  img3.src = "./assets/carousel/trees.jpeg";

  const img4 = document.createElement('img');
  img4.src = "./assets/carousel/turntable.jpeg";

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');

  carouselDiv.appendChild(leftButton)
  carouselDiv.appendChild(img1)
  carouselDiv.appendChild(img2)
  carouselDiv.appendChild(img3)
  carouselDiv.appendChild(img4)
  carouselDiv.appendChild(rightButton);

  var carouselItems = carouselDiv.querySelectorAll('img');
  var counter = 0;
  var amount = carouselItems.length;
  var active = carouselItems[0];
  
  carouselDiv.classList.add('slider');

  // Create a new function for this
  const rotateCarousel = function(direction) {
    active.classList.remove('active');
    counter = counter + direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && !items[counter]) {
      counter = 0;
    }
    active = items[counter];
    active.classList.add('active');
  }
  rightButton.addEventListener('click', function(event) {
    rotateCarousel(1);
  });
  leftButton.addEventListener('click', function(event) {
    rotateCarousel(-1);
  });
  debugger
  rotateCarousel(0);

  return carouselDiv;
}
const getCarouselContainer = document.querySelector('.carousel-container');

getCarouselContainer.appendChild(carouselDiv);
