const url = "https://type.fit/api/quotes";
let data = [];

const newQuote = () => {
  const quote = data[Math.floor(Math.random() * data.length)];
  console.log(quote);
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
