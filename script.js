import React from "https://esm.sh/react";
const quotesArray = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  'The way to get started is to quit talking and begin doing.',
  'The future belongs to those who believe in the beauty of their dreams.',
  'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.',
  'You must be the change you wish to see in the world.',
  'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
  'The only thing we have to fear is fear itself.',
  'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
  'Do one thing every day that scares you.',
  'Well done is better than well said.',
  'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
  'It is during our darkest moments that we must focus to see the light.',
  'Do not go where the path may lead, go instead where there is no path and leave a trail.',
  'Be yourself; everyone else is already taken.',
  'You will face many defeats in life, but never let yourself be defeated.',
  'Go confidently in the direction of your dreams! Live the life you imagined.',
  'In the end, it is not the years in your life that count. It is the life in your years.',
  'Never let the fear of striking out keep you from playing the game.',
  'In this life we cannot do great things. We can only do small things with great love.',
  'Many of lifes failures are people who did not realize how close they were to success when they gave up.',
  'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.'
];

const authorArray = [
  'Nelson Mandela',
  'Walt Disney',
  'Eleanor Roosevelt',
  'Oprah Winfrey',
  'Mother Teresa',
  'Martin Luther King Jr.',
  'Eleanor Roosevelt',
  'Benjamin Franklin',
  'Helen Keller',
  'Aristotle',
  'Ralph Waldo Emerson',
  'Oscar Wilde',
  'Maya Angelou',
  'Henry David Thoreau',
  'Abraham Lincoln',
  'Babe Ruth',
  'Mother Teresa',
  'Thomas A. Edison',
  'Dr. Seuss'
];

// combine both arrays to match author with correct quote 

const quoteAuthorArray = quotesArray.map((quote, index) => ({
  quote,
  author: authorArray[index] || 'Unknown'
}));


//display random quote, ** using stateless functional component

function Quote({ text, author }) {
  return (
    <div className="quote-container">
      <p className="quote-text">{text}</p>
      <p className="quote-author">{author}</p>
    </div>
  );
}


function App() {
  const [currentQuote, setCurrentQuote] = useState(quoteAuthorArray[0]);
  
 // function to generate random quote, ** must be in the export react component

  const randomQuote = () => {
  const random = Math.floor(Math.random() * quoteAuthorArray.length);
  setCurrentQuote(quoteAuthorArray[random]);
 };
  
  return (
    <div>
      <Quote text={currentQuote.quote} author={currentQuote.author} />
      <button onClick={randomQuote}>New Quote</button> {/* replaced button DOM manipulation with onClick */}
    </div> 
  );
} 

ReactDOM.render(<App />, document.getElementById('display'));
