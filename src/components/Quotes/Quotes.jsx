import React, {Component} from 'react'
import Slider from "react-slick";
import SimpleSlider from './SimpleSlider';
import "./Quotes.css";

const Quotes = () => {
    const styles = {
        width: "100%", 
        display: "flex", 
        justifyContent: "center", 
    }
    return(
        <div style={styles}>
            <div className="quoteContainer">
                <img src="https://source.unsplash.com/random" alt="quote author"/>
                <div className="divider">
                    <q>The greatest glory in living lies not in never falling, but in rising ever</q>
                    <p><i>-Nelson Mandela</i></p>
                </div>
            </div>
        </div>
    )
}   

export default Quotes;



// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
// };

// return (
//     <div class="Slider Container">
//         <h2>Single Item</h2>
//         <Slider {...settings}>
//         <div>
//             <h3>1</h3>
//         </div>
//         <div>
//             <h3>2</h3>
//         </div>
//         <div>
//             <h3>3</h3>
//         </div>
//         <div>
//             <h3>4</h3>
//         </div>
//         <div>
//             <h3>5</h3>
//         </div>
//         <div>
//             <h3>6</h3>
//         </div>
//         </Slider>
//     </div>        
// )