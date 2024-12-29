import React from 'react'
import Hero from '../../components/hero/Hero'
import BestChoice from '../../components/bestChoice/BestChoice'
import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <div className='flex flex-col items-center'>
      <section className='max-w-screen-xl'>

        <Hero/>
        <BestChoice/>
        {/* <Contact/> */}
      </section>
    </div>
  )
}

export default Home