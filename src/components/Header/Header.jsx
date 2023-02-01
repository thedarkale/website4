import React from 'react'
// import Quote from '../Quotes/Quote'

const Header = ({ title }) => (
  <header className="border-bottom border-color-light-grey">
    <div className="container">
      <h1 className="margin-none padding-top-2 padding-bottom-2">
        <h1>{title}</h1>
        {/* <h2><u>Quote of the Day</u></h2>
        <Quote /> */}
      </h1>
    </div>
  </header>
)

export default Header
