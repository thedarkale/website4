import React from "react";
import './style.scss';

const CustomQuote = ({ url, text, author }) => {
    return (
        <div class="holder">
            <div class="main-container">
                <div className="image-container">
                    <img src={url} alt="author" />
                </div>
                <div className="main">
                    <q>{text}</q>
                    <p><i>-{author}</i></p>
                </div>
            </div>
        </div>
    )
}

export default CustomQuote;
