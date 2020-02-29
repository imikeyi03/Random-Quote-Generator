/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  let quotes = [
    {
      "quote" : "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
      "source" : "Stuart Scott"  
    },
    {
      "quote" : "You are braver than you believe, stronger than you seem and smarter than you think.",
      "source" : "Disney",
      "citation" : "Winnie the Pooh",
      "tags" : "Motivation"
    },
    {
      "quote" : "You are confined only by the walls you build yourself.",
      "source" : "Andrew Murphy",
      "tags" : "Motivation"
    },
    {
      "quote" : "It's the possibility of having a dream come true that makes life interesting.",
      "source" : "Paulo Coelho",
      "citation" : "The Alchemist",
      "year" : 1988
    },
    {
      "quote" : "It was times like these when I thought my father, who hated guns and had never been to any wars, was the bravest man who ever lived.",
      "source" : "Harper Lee",
      "citation" : "To Kill A Mockingbird",
      "year" : 1987
    },
    {
      "quote" : "Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.",
      "source" : "William Goldman",
      "citation" : "The Princess Bride"
    },
    {
      "quote" : "Good morning, Vietnam!",
      "source" : "Adrian Cronauer",
      "citation" : "Good morning, Vietnam",
      "year" : 1987
    },
    {
      "quote" : "The Dude abides.",
      "source" : "The Big Lebowski",
      "citation" : "The Dude",
      "year" : 1998
    },
    {
      "quote" : "I'm not bad. I'm just drawn that way.",
      "source" : "Who Framed Roger Rabbit",
      "citation" : "Jessica Rabit",
      "year" : 1988
    },
    {
      "quote" : "You're gonna need a bigger boat.",
      "source" : "Jaws",
      "citation" : "Martin Brody",
      "year" :  1975
    }
];


// Function grabs a randomly selected quote object from the quotes array

function getRandomQuote() {
  let quoteMessage;
  let randomNumber = Math.floor(Math.random() * quotes.length);

  for(let i = 0; i < quotes.length; i++) {
    quoteMessage = quotes[randomNumber]; 
  }
  return quoteMessage;
}


// Function that, every 8 seconds, displays a new quote

setInterval( function printQuote() {
  let randomQuote = getRandomQuote();
  let html = '<p class="quote">' + randomQuote.quote + '</p>';
            
  html+= '<p class="source">' + randomQuote.source;

  if(randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  if(randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }

  if(randomQuote.tags) {
    html += '<span class="tags">' + randomQuote.tags + '</span>';
  }

  html +='</p>';

  // Select div and output message

  let outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = html;


  // Call getRandomColor and change BG color

  document.getElementById('js-body').style.backgroundColor = getRandomColor();

}, 8000);



// Generates a random RGB value

function getRandomColor() {
  let color;

  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  return color;

}





// Disabled button click event for timed interval changes

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);