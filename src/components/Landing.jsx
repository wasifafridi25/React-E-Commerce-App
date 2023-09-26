import React from 'react'
import headerImage from '../assets/Undraw_Books.svg'

export default function Landing() {
  return (
    <section id='landing'>
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>America's most awarded online library platform</h1>
                    <h2>Find your dream book in this <span className='purple'>library</span></h2>
                    <a href="#features">
                        <button className="btn">Browse Books</button>
                    </a>
                </div>
                <figure className="header__img--wrapper">
                    <img src={headerImage} alt="" />
                </figure>
            </div>
        </header>
      
    </section>
  )
}
