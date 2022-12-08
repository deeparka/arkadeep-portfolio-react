import React from 'react'

const Home = () => {

  return (
    <div className="pt-16 sm:pt-20">
      <div className="bg-body-background bg-cover pt-48 pb-40 px-5 text-center md:px-0">
        <h1 className=''>Hello, my name is Arkadeep Prasad</h1>
        <h4 className='my-5'>I’m an UI & Front-End Developer</h4>
        <button className="bg-customRed my-3 px-14 py-3 rounded-xl text-xl shadow-lg shadow-same" ><a href="https://drive.google.com/file/d/1URgGYuzjth75d8SMpo1x0uyWCxjXYfrT/view?usp=sharing">Resume</a></button>
      </div>
      <section id='about' className="pt-16 text-center">
        <h1>About Me</h1>
      </section>
    </div>
  )
}

export default Home