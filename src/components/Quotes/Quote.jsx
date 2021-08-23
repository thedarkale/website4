import React from 'react'
import Quotes from './Quotes'
import './style.scss'

const quotes = [
    {
        url: require("./images/Nelson_Mandela_1994.jpg"),
        text: "The greatest glory in living lies not in never falling, but in rising ever",
        author: "Nelson Mandela",
        alt: "By © copyright John Mathew Smith 2001, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=74768082",
        position: "center"
    },
    {
        url: require("./images/Oprah_in_2014.jpg"),
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
        author: "Oprah Winfrey",
        alt: "By https://www.flickr.com/photos/aphrodite-in-nyc - https://www.flickr.com/photos/aphrodite-in-nyc/15445694840, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=45044905",
        position: "bottom"
    },
    {
        url: require("./images//James_Cameron_by_Gage_Skidmore.jpg"),
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron",
        alt: "By Gage Skidmore, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=50383098",
        position: "top right"
    }
]

const CustomQuote = ({ url, text, author, alt, position }) => {
    return (
        <div class="holder">
            <div class="main-container">
                <div className="image-container">
                    <img src={url} alt={alt} style={{objectPosition: position}}/>
                </div>
                <div className="main">
                    <q>{text}</q>
                    <p><i>-{author}</i></p>
                </div>
            </div>
        </div>
    )
}

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
