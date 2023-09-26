import React from 'react'
import footerLogo from '../assets/Library.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className="footer__logo">
                        <img src={footerLogo} className='footer__logo--img' alt="" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <Link to="/" className='footer__link'>Home</Link>
                    <span className='footer__link no-cusor'>About</span>
                    <Link to="/books" className='footer__link'>Books</Link>
                    <Link to="/cart" className='footer__link'>Cart</Link>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2023 Library, Bhuiyan Shadman Wasif
                </div>
            </div>
        </div>
      
    </footer>
  )
}
