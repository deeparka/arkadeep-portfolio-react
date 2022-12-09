import React from 'react'
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'
import phone from '../images/phone.png'
import github from '../images/github.png'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="pt-16 sm:pt-20">

      {/* Name */}
      <div className="bg-body-background bg-cover pt-48 pb-40 px-5 text-center md:px-0">
        <h1 className='lg:tracking-wider'>Hello, my name is Arkadeep Prasad</h1>
        <h4 className='my-5'>I’m an UI & Front-End Developer</h4>
        <button className="bg-customRed my-3 px-14 py-3 rounded-xl text-xl shadow-lg shadow-same" ><a href="https://drive.google.com/file/d/1URgGYuzjth75d8SMpo1x0uyWCxjXYfrT/view?usp=sharing">Resume</a></button>
      </div>

      {/* About Me */}
      <section id='about' className="pt-16 text-center">
        <h1>About Me</h1>
        <div className="bg-customRed mx-auto mt-2 mb-5 w-28 h-1 rounded"/>
        <p className="px-6 sm:px-8 md:px-16 lg:px-100px text-xl">
        Hi, I am a self-taught UI & Front-End Designer & Developer. I am passionate about learning new technologies. I am always keen to work and experience things. I follow my passion for designing & developing & also find it very interesting & enjoyable. I have been working with HTML, CSS & JS for almost 5 months on my personal projects. I love to give the users a great user experience. I always try to think about what can make the users happy while using my applications.
        </p>
      </section>
    </div>
  )
}

export default Home