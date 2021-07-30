import React from 'react'
import './Quotes.scss'

const Quotes = () => {

    return (
        <>
            <div className="quoteContainer">
                <img src="https://source.unsplash.com/random" alt="quote author"/>
                <div className="divider">
                    <blockquote>The greatest glory in living lies not in never falling, but in rising every time we fall</blockquote>
                    <p><i>-Nelson Mandela</i></p>
                </div>
            </div>
        </>
    )
}   

export default Quotes;