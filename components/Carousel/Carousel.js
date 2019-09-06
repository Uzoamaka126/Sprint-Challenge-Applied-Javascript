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

  const img2 = document.createElement('img'); 

  const img3 = document.createElement('img');

  const img4 = document.createElement('img');
  

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');

  carouselDiv.appendChild(leftButton)
  carouselDiv.appendChild(img1)
  carouselDiv.appendChild(img2)
  carouselDiv.appendChild(img3)
  carouselDiv.appendChild(img4)
  carouselDiv.appendChild(rightButton);

  return carouselDiv;
}
document.querySelector('.carousel-container').appendChild(createCarousel());
