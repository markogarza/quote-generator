const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const buttonTwitter = document.getElementById("twitter");
const buttonNewQuote = document.getElementById("new-quote");

const url = "https://type.fit/api/quotes";
let data = [];

const newQuote = () => {
  const quote = data[Math.floor(Math.random() * data.length)];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
};

const getQuotes = async () => {
  try {
    const response = await fetch(url);
    data = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
};

getQuotes();
