const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const buttonTwitter = document.getElementById("twitter");
const buttonNewQuote = document.getElementById("new-quote");

const url = "https://type.fit/api/quotes";
let data = [];

const newQuote = () => {
  const quote = data[Math.floor(Math.random() * data.length)];
  //   Check if quote is long
  if (quote.text.length > 90) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;

  //   Check if author is unknown
  if (!quote.text) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }
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
