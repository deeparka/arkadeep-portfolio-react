import React, { useState } from "react";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import github from "../images/github.png";
import { Link } from "react-router-dom";
import ScrollToTop from "../lib/ScrollToTop";
import emailjs from "@emailjs/browser";
import ContactDrawer from "./ContactDrawer";
import { motion } from "framer-motion";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const data = {
    name,
    email,
    message,
  };

  function handleContacts() {
    showContacts ? setShowContacts(false) : setShowContacts(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(data.name);
    // console.log(data.email);
    // console.log(data.message);
    setSubmitted(true);

    if (name && email && message) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          data,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => console.log(result.text),
          (error) => console.log(error.text)
        );
    }
  }

  return (
    <div
      className="pt-16 space-y-24 sm:pt-20"
      onClick={() => (showContacts ? setShowContacts(false) : null)}
    >
      {/* Scroll to top component is for render the page from starting */}
      <ScrollToTop />
      {/* Name */}
      <div className="bg-body-background bg-cover pt-48 pb-40 px-5 text-center md:px-0">
        <motion.h1
          className="lg:tracking-wider"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hello, my name is Arkadeep Prasad
        </motion.h1>
        <motion.h4
          className="my-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          I???m an UI & Front-End Developer
        </motion.h4>
        <motion.button
          className="bg-customRed my-3 px-14 py-3 rounded-xl text-xl shadow-[0_15px_25px_-8px_#EDEDED] transition transform ease-in-out delay-100 hover:bg-customHoverRed"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          whileHover={{ scale: 1.3 }}
        >
          {/* display this text on medium and less screens */}
          <a
            href="https://drive.google.com/file/d/1URgGYuzjth75d8SMpo1x0uyWCxjXYfrT/view?usp=sharing"
            className="inline lg:hidden"
          >
            Resume
          </a>
          {/* display this text on large and greater screens */}
          <a
            href="https://drive.google.com/file/d/1URgGYuzjth75d8SMpo1x0uyWCxjXYfrT/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline"
          >
            Resume
          </a>
        </motion.button>
      </div>

      {/* About Me */}
      <section id="about" className="text-center">
        <h1>About Me</h1>
        <div className="bg-customRed mx-auto mt-2 mb-5 w-28 h-1 rounded" />
        <p className="px-6 text-xl sm:px-8 md:px-16 lg:px-100px">
          Hi, I am a self-taught UI & Front-End Designer & Developer. I am
          passionate about learning new technologies. I am always keen to work
          and experience things. I follow my passion for designing & developing
          & also find it very interesting & enjoyable. I have been working with
          HTML, CSS & JS for almost 5 months on my personal projects. I love to
          give the users a great user experience. I always try to think about
          what can make the users happy while using my applications.
        </p>
        {/* only for smaller screen than medium  */}
        <button
          className="bg-customRed mt-6 px-14 py-3 rounded-xl text-xl shadow-[0_15px_25px_-8px_#EDEDED] md:hidden"
          onClick={handleContacts}
        >
          Contacts
        </button>
        {showContacts && <ContactDrawer />}
      </section>

      {/* Contacts */}
      <section id="contact" className="text-center md:px-16 lg:px-100px">
        {/* only for bigger screen than medium */}
        <div className="hidden md:flex items-start justify-center py-16 md:space-x-11 md:text-xs lg:space-x-20 lg:text-sm">
          <div className="group">
            <img
              src={gmail}
              alt="Gmail"
              className="h-28 w-28 ml-5 group-hover:animate-bounce lg:ml-6"
            />
            <p className="">arkadeep180@gmail.com</p>
          </div>
          <div className="group">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-28 w-28 ml-2 group-hover:animate-bounce"
            />
            <a href="https://www.linkedin.com/in/arkadeep-prasad-1b5074201/">
              Arkadeep Prasad
            </a>
          </div>
          <div className="group">
            <img
              src={whatsapp}
              alt="Whatsapp"
              className="h-28 w-28 group-hover:animate-bounce md:ml-2"
            />
            <p className="">+91-9593527725</p>
          </div>
          <div className="group">
            <img
              src={github}
              alt="Github"
              className="h-28 w-28 group-hover:animate-bounce"
            />
            <a href="https://github.com/deeparka">deeparka</a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="text-center px-8 md:px-16 lg:px-100px">
        <div className="lg:grid grid-cols-12">
          <div className="mb-20 hidden md:block lg:col-span-6 lg:my-0">
            <h1 className="">Technologies I've worked with</h1>
            <div className="bg-customRed mx-auto mt-2 mb-5 w-60 h-1 rounded lg:mb-7" />
            <p className="text-xl">
              I have been working with Figma, HTML, CSS & JS for almost 6 months
              on my personal projects. I have woked with frameworks like
              Tailwind CSS, React.js & Extensions like SCSS. I also have the
              knowledge about Wireframing, Prototype etc. in Figma.
            </p>
            <div className="flex items-center justify-center space-x-3 my-8 lg:block">
              {/* for medium screen */}
              <p className="text-xl lg:hidden">Take a look at my works</p>
              <Link to="/projects">
                <button className="bg-customRed px-4 py-1 rounded-xl text-sm block lg:hidden">
                  Click Here
                </button>
              </Link>
              {/* for large screens and bigger */}
              <Link to="/projects">
                <motion.button className="hidden bg-customRed rounded-xl text-xl px-14 py-3 shadow-[0_15px_25px_-8px_#EDEDED] transition transform ease-in-out delay-100 hover:scale-110 hover:bg-customHoverRed hover:-translate-y-1 lg:inline-flex">
                  Projects
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <h1>My Skills</h1>
            <div className="bg-customRed mx-auto mt-2 mb-5 w-28 h-1 rounded" />
            <div className="flex flex-wrap justify-evenly px-6 sm:px-8">
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                HTML
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                CSS
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                SCSS
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Tailwind CSS
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                JavaScript
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                React
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Next
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Git
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Github
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Python
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Java
              </motion.div>
              <motion.div
                className="bg-customGrey px-1 py-3 mx-2 my-2 rounded h-auto w-28"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Figma
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Form */}
      <div className="bg-body-background py-24 content-center px-8 md:px-16 lg:px-100px">
        {!submitted && (
          <div className="py-12 px-6 bg-customGrey max-w-3xl m-auto rounded-xl drop-shadow-lg">
            <h1 className="text-center mb-6 text-xl sm:text-4xl">
              Send a message
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center space-y-8">
                {/* Name */}
                <div className="flex flex-wrap flex-col items-start w-full">
                  <label className="font-bold mb-2">Name*</label>
                  <input
                    type="text"
                    className="text-customBlack rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-customBlack md:p-3"
                    placeholder="Name: John Doe"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                {/* Email */}
                <div className="flex flex-wrap flex-col items-start w-full">
                  <label className="font-bold mb-2">Email*</label>
                  <input
                    type="email"
                    className="text-customBlack rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-customBlack md:p-3"
                    placeholder="johndoe37@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* Message */}
                <div className="flex flex-wrap flex-col items-start w-full">
                  <label className="font-bold mb-2">Message*</label>
                  <textarea
                    className="text-customBlack rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-customBlack"
                    cols={30}
                    rows={10}
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                {/* Send Button */}
                <button
                  type="submit"
                  className="border rounded-md border-customRed bg-customRed p-2 w-full md:p-3 hover:bg-customHoverRed"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
        {/* after submitting the form */}
        {submitted && (
          <div className="py-12 px-6 bg-customGrey max-w-3xl m-auto rounded-xl drop-shadow-lg">
            <p className="text-center text-lg sm:text-4xl">
              Thank you for sending me message
            </p>
            <p className="mt-3 text-center text-base sm:text-2xl">
              I will contact with you asap
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
