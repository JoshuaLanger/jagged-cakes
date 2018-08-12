import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer style={{ background: '#007dff' }}>
    <form>
      <label htmlFor="email" />
      <input type="email" name="email" placeholder="email" />
      <input type="submit" value="Submit" />
      <div className="contact">
        <h4>Email</h4>
        <p>jaggedcakes@gmail.com</p>
      </div>
      <div className="contact">
        <h4>Phone</h4>
        <p>(123) 456-7890</p>
      </div>
      <div className="contact">
        <h4>Address</h4>
        <p>1600 Pennsylvania Ave</p>
        <p>1600 Pennsylvania Ave</p>
      </div>
    </form>
  </footer>
)

export default Footer
