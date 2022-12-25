import React from "react";
import ScrollToTop from "../lib/ScrollToTop";
import { FaGithub, FaFigma } from "react-icons/fa";
import twitter2 from "../images/twitter-2.png";
import hulu2 from "../images/hulu-2.png";
import weather from "../images/weather.png";
import dojoBlog from "../images/dojo-blog.png";
import scramble from "../images/scramble.png";
import bluetoothWeb from "../images/bluetoothweb.png";
import bluetoothIOS from "../images/bluetoothIOS.png";
import quizWeb from "../images/quizweb.png";
import { FiExternalLink } from "react-icons/fi";
import {
  handleBluetoothIOSDesign,
  handleBluetoothIOSPreview,
  handleBluetoothWebDesign,
  handleBluetoothWebPreview,
  handleDojoBlogCode,
  handleDojoBlogLiveLink,
  handleHulu2Code,
  handleHulu2LiveLink,
  handleMedium2Code,
  handleMedium2LiveLink,
  handleQuizWebDesign,
  handleQuizWebPreview,
  handleScrambleCode,
  handleScrambleLiveLink,
  handleTwitter2Code,
  handleTwitter2LiveLink,
  handleWeatherCode,
  handleWeatherLiveLink,
} from "../lib/projectHelper";

function Projects() {
  return (
    <div className="mb-6 pt-16 px-6 flex flex-wrap justify-around gap-5 sm:px-8 sm:pt-20 md:px-16 lg:px-100px">
      <ScrollToTop />
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={twitter2} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Twitter 2.0</h2>
              <div className="flex space-x-4">
                <FaGithub
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleTwitter2Code}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleTwitter2LiveLink}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a twitter clone application. It's functionality is similar
              to the original twitter. Here user can tweet posts and comment on
              posts.But the user need to sign in to tweet something or comment
              in any tweet.For the Sign in I used twitter authentication.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Next.JS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Tailwind CSS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Sanity
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                TypeScript
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                REST API
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                NextAuth
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={twitter2} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Medium 2.0</h2>
              <div className="flex space-x-4">
                <FaGithub
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleMedium2Code}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleMedium2LiveLink}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a clone application of Medium. In this application anyone
              can read any blog article they want and can comment in any blog
              they want. The comments will be shown under the article once the
              writer approves the comments. Otherwise it will not be shown. Any
              user can register as a new author if they want. Currently I'm
              working on the create blog feature.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Next.JS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Tailwind CSS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Sanity
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                TypeScript
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                REST API
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={hulu2} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Hulu 2.0</h2>
              <div className="flex space-x-4">
                <FaGithub
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleHulu2Code}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleHulu2LiveLink}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a completely responsive clone application of Hulu. I used
              the TMDB database for the data of the movies details. This
              application doesn't support the streaming feature like the
              original Hulu. Currently I'm working on the movie details feature.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Next.JS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Tailwind CSS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                TMDB Database
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={weather} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Weather Application</h2>
              <div className="flex space-x-4">
                <FaGithub
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleWeatherCode}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleWeatherLiveLink}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a free weather application. I used the FreeWeather API for
              the data of the weather details. This application doesn't support
              the live weather feature. A user can view the forecast up to three
              days. They can also view the details of a particular day like the
              air quality, UV index, rain probability, etc. for a a particular
              city. If the city does not exist then it will show 404 error.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                React.JS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                SCSS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                FreeWeather API
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={dojoBlog} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Dojo Blog Application</h2>
              <div className="flex space-x-4">
                <FaGithub
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleDojoBlogCode}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleDojoBlogLiveLink}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a blog writing application. I created a local database for
              the data of the weather details. This application doesn't support
              the live weather feature. A user can view the forecast up to three
              days. They can also view the details of a particular day like the
              air quality, UV index, rain probability, etc. for a a particular
              city. If the city does not exist then it will show 404 error.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                React.JS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Vanilla CSS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                REST API
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={scramble} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Scramble Game Application</h2>
              <div className="flex space-x-4">
                <FaGithub
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleScrambleCode}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleScrambleLiveLink}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a simple word rearranging application. It is my first
              application using Vanilla.js and my first ever project. When a
              user guess e word correctly it then goes to next word. If user
              guesses it wrong then he/ she willbe given another chance to
              guess.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Vanilla.JS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Vanilla CSS
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                HTML
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={bluetoothWeb} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Bluetooth KeyChain Web Application</h2>
              <div className="flex space-x-4">
                <FaFigma
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleBluetoothWebDesign}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleBluetoothWebPreview}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a simple keychain application. When a user wants to buy any
              bluetooth products they can add it in the cart and purchase it.
              The user can also read reviews about the products and read
              articles also.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Figma
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Google
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={bluetoothIOS} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Bluetooth KeyChain iOS Application</h2>
              <div className="flex space-x-4">
                <FaFigma
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleBluetoothIOSDesign}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleBluetoothIOSPreview}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a simple Bluetooth application UI design using Figma. It
              helps the users to keep on their healthy routine. If the user lost
              something valuable like the keys or the bag user was carrying the
              buzzer in the application buzzes instantly and alerts the user.
              The user can track their belongings with the help of the Map of
              the application.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Figma
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Google
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-xl shadow-lg shadow-customDrawerGrey overflow-hidden mt-8 lg:mt-14 bg-customGrey group transition transform ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 lg:cursor-pointer">
        <img src={quizWeb} alt="" className="w-full" />
        <div className="py-4 px-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="">Quiz Web Application</h2>
              <div className="flex space-x-4">
                <FaFigma
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleQuizWebDesign}
                />
                <FiExternalLink
                  className="h-6 w-6 transition transform ease-in-out hover:scale-125"
                  onClick={handleQuizWebPreview}
                />
              </div>
            </div>
            <p className="text-lg lg:line-clamp-3 lg:group-hover:line-clamp-none">
              It is a quiz UI designed using Figma. The user has to log in or
              signup. they can take up the quiz according to the topic they
              like. At last, they can view their score. There is a dashboard
              where they can check their positions. After using the application
              they can log out or not it's their choice.
            </p>
          </div>
          <hr className="my-4 text-customWhite" />
          <div className="space-y-1">
            <p className="font-semibold text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-start space-x-1">
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Figma
              </span>
              <span className="bg-customBlack px-2 py-3 mt-2 rounded">
                Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
