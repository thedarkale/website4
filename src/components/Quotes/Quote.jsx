import React from 'react';
import Quotes from './Quotes'
import CustomQuote from './CustomQuote'

const quotes = [
    {
        url: "https://source.unsplash.com/random",
        text: "The greatest glory in living lies not in never falling, but in rising ever",
        author: "Nelson Mandela"
    },
    {
        url: "https://source.unsplash.com/random/collection",
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
        author: "Oprah Winfrey"
    },
    {
        url: "https://source.unsplash.com/random?nature",
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    }
]

const Quote = () => {

    const QuoteComponent = quotes.map(({ url, text, author }) => (
        <CustomQuote url={url} text={text} author={author} />
    ))

    return (
        <div className="app">
            <Quotes>
                {QuoteComponent}
            </Quotes>
        </div>
    );
}

export default Quote;
