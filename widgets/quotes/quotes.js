let quoteType = document.getElementById("quote-type");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let api_url = "https://api.quotable.io/quotes/random?tags=famous-quotes";

/*
// API url will be updated with corresponding tags
quoteType.onclick = () => {
    console.log(quoteType.selectedIndex);
    switch (quoteType.selectedIndex) {
        case 0:
            // 1,090 total
            api_url = "https://api.quotable.io/quotes/random?tags=amous-quotes"
            console.log(api_url)
            break;
        case 1:
            // 121 total
            api_url = "https://api.quotable.io/quotes/random?tags=motivational|inspirational"
            console.log(api_url)
            break;
        case 2:
            // 113 total
            api_url = "https://api.quotable.io/quotes/random?tags=business|success"
            console.log(api_url)
            break;
        case 3:
            // 557 total
            api_url = "https://api.quotable.io/quotes/random?tags=wisdom|truth"
            console.log(api_url)
            break;
        case 4:
            // 50 total
            api_url = "https://api.quotable.io/quotes/random?tags=technology"
            console.log(api_url)
            break;
        case 5: 
            // 64 total
            api_url = "https://api.quotable.io/quotes/random?tags=life|love|family"
            console.log(api_url)
            break;
        default: 
            api_url = "https://api.quotable.io/quotes/random?tags=famous-quotes"
            console.log(api_url)
    }
}
*/

function randomQuote() {
    fetch(api_url).then(res => res.json()).then(result =>{
        console.log(result)
    })
}

