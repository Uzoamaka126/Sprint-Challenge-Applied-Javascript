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

let getCardTitle = [];
let getCardArticles = []

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        response.data.articles.javascript.forEach(article => {
            getCardTitle.push(Object.keys(response.data.articles));
            getCardArticles.push(response.data.articles);
            // console.log(getCardTitle);
            // console.log(getCardArticles);
        })
    })
    .then(() => {
        getCardTitle[0].forEach((title) => {
            let getArticleContents = getCardArticles[0][title];
            console.log(getArticleContents);

            getArticleContents.forEach((item) => {
                let newCard = createCards(item);
                console.log(newCard)

                newCard.setAttribute("data-group", title);
                document.querySelector(".cards-container").appendChild(newCard);
            })
        })
    })

    function createCards(tab) {
        const cardDiv = document.createElement('div');
        const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgDiv = document.createElement('div');
        const image = document.createElement('img');
        const authorSpan = document.createElement('span');

        cardDiv.classList.add('card');
        headlineDiv.classList.add('headline');
        authorDiv.classList.add('author');
        imgDiv.classList.add('img-container');

        image.src = tab.authorPhoto;
        headlineDiv.textContent = tab.headline;
        authorSpan.textContent = 'Written by:' + tab.authorName;

        imgDiv.appendChild(image);
        authorDiv.appendChild(imgDiv);
        authorDiv.appendChild(authorSpan);

        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(authorDiv)

        return cardDiv; 
    }