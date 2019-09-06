// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const articles = document.querySelector('.cardss');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let newResponse = response.data.articles.map(article => {
            articles.appendChild(createCards(article));
        })

        return newResponse;
    })

    function createCards(tab) {
        const tabDiv = document.createElement('div');
        tabDiv.classList.add('card');
        tabDiv.textContent = tab

        const headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');

        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');

        const image = document.createElement('img');

        const authorSpan = document.createElement('span');


        return tabDiv; 
    }

