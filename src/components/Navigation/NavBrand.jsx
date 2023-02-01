import React from 'react'
import AutoLink from '../AutoLink/AutoLink'

const NavBrand = ({ brand, title }) => (
  <div className="brand">
    <AutoLink className="flex align-items-center" to="/">
      <img
        className="image margin-right-half border-radius"
        src={brand}
        alt="Brand Image"
      />
      <span
        className="title"
        style={{
          fontFamily: 'Poppins',
          fontSize: '2rem',
          fontWeight: 200,
          fontStyle: 'normal',
          color: '#616568',
        }}
      >
        <strong>{title}</strong>
      </span>
    </AutoLink>
  </div>
)

export default NavBrand
