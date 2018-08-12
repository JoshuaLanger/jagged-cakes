import React from 'react'
import Link from 'gatsby-link'

// breaks down at 520px

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#007dff',
    }}
  >
    <nav
      style={{
        margin: '1em 0',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h3
        style={{
          padding: '0 2em',
        }}
      >
        Jagged Cakes
      </h3>
      <div className="nav__links" style={{ border: '1px solid red' }}>
        <Link to="/about" style={{ padding: '0 1em' }}>
          About
        </Link>
        <Link to="/menu" style={{ padding: '0 1em' }}>
          Menu
        </Link>
        <Link to="/gallery" style={{ padding: '0 1em' }}>
          Gallery
        </Link>
        <p style={{ display: 'inline-block', padding: '0 1em' }}>Cart (0)</p>
      </div>
    </nav>
  </header>
)

export default Header
