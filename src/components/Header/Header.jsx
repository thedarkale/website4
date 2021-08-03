import React from "react";
import Quotes from '../Quotes/Quotes'

const Header = ({ title }) => (
  <header className="border-bottom border-color-light-grey">
    <div className="container">
      <h1 className="margin-none padding-top-2 padding-bottom-2">
        <Quotes />
      </h1>
    </div>
  </header>
)

export default Header;