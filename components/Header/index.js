// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'SMARCH 28, 2019';

    const headerh1 = document.createElement('h1');
    headerh1.textContent = 'Lambda Times';

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98°';

    header.appendChild(dateSpan)
    header.appendChild(headerh1)
    header.appendChild(tempSpan)

    return header;

}
document.querySelector('.header-container').appendChild(Header());