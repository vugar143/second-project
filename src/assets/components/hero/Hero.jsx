import React from 'react'
import {useGlobalContext} from "../../Context"
function Hero() {
    const {closeSubMenu}=useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
        <div className="hero-center">
            <article className="hero-info">
<h1>Financial infrastructure for the internet
</h1>
<p>Millions of businesses of all sizes – from startups to Fortune 500s – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <button className='btn'>Start Now</button>
            </article>
            <article className="hero-images">
<img className='phone-img' src="https://raw.githubusercontent.com/john-smilga/react-projects/731d90db6cadfaed6510fa7dedf5b531181ceb8a/13-stripe-submenus/final/src/images/phone.svg" alt="" />
            </article>
        </div>
    </section>
  )
}

export default Hero