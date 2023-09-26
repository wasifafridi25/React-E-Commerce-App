import React from 'react'
import footerLogo from '../assets/Library.svg'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <a href="/">
                    <figure className="footer__logo">
                        <img src={footerLogo} className='footer__logo--img' alt="" />
                    </figure>
                </a>
                <div className="footer__list">
                    <a href="/" className='footer__link'>Home</a>
                    <span className='footer__link no-cusor'>About</span>
                    <a href="/books" className='footer__link'>Books</a>
                    <a href="/cart" className='footer__link'>Cart</a>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2023 Library, Bhuiyan Shadman Wasif
                </div>
            </div>
        </div>
      
    </footer>
  )
}
