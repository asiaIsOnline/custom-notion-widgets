let quoteType = document.getElementById("quote-type");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let newQuoteBtn = document.getElementById("newQuoteBtn")
let api_url = "https://api.quotable.io/quotes/random?tags=famous-quotes";


// API url will be updated with corresponding tags
quoteType.onchange = () => {
    console.log(quoteType.selectedIndex);
    switch (quoteType.selectedIndex) {
        case 1:
            // 121 total
            api_url = "https://api.quotable.io/quotes/random?tags=motivational|inspirational"
            console.log(api_url)
            randomQuote();
            break;
        case 2:
            // 113 total
            api_url = "https://api.quotable.io/quotes/random?tags=business|success"
            console.log(api_url)
            randomQuote();
            break;
        case 3:
            // 557 total
            api_url = "https://api.quotable.io/quotes/random?tags=wisdom|truth"
            console.log(api_url)
            randomQuote();
            break;
        case 4:
            // 50 total
            api_url = "https://api.quotable.io/quotes/random?tags=technology"
            console.log(api_url)
            randomQuote();
            break;
        case 5: 
            // 64 total
            api_url = "https://api.quotable.io/quotes/random?tags=life|love|family"
            console.log(api_url)
            randomQuote();
            break;
    }
}


function randomQuote() {
    fetch(api_url).then(res => res.json()).then(result =>{
        console.log(result)
        quote.innerHTML = result[0].content;
        author.innerHTML = result[0].author;
    })
}

newQuoteBtn.onclick = () => {
    randomQuote()
}