import React from "react";

function Projects() {
  return (
    <div className="mb-6 pt-16 px-6 flex flex-wrap justify-evenly sm:px-8 sm:pt-20 md:px-16 lg:px-100px">
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group">
        <div className="space-y-3">
          <h2 className="">Twitter 2.0</h2>
          <p className="text-lg">
            It is a twitter clone application. It's functionality is similar to
            the original twitter. Here user can tweet posts and comment on
            posts.But the user need to sign in to tweet something or comment in
            any tweet.For the Sign in I used twitter authentication.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
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
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://github.com/deeparka/twitter-2.0"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            href="https://twitter-2-0-teal.vercel.app/"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group">
        <div className="space-y-3">
          <h2 className="">Medium 2.0</h2>
          <p className="text-lg">
            It is a clone application of Medium. In this application anyone can
            read any blog article they want and can comment in any blog they
            want. The comments will be shown under the article once the writer
            approves the comments. Otherwise it will not be shown. Any user can
            register as a new author if they want. Currently I'm working on the
            create blog feature.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
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
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://github.com/deeparka/medium-next-sanity"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            href="https://medium-next-sanity-blond.vercel.app/"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group ">
        <div className="space-y-3">
          <h2 className="">Hulu 2.0</h2>
          <p className="text-lg">
            It is a completely responsive clone application of Hulu. I used the
            TMDB database for the data of the movies details. This application
            doesn't support the streaming feature like the original Hulu.
            Currently I'm working on the movie details feature.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
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
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://github.com/deeparka/hulu-2.0"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            href="https://hulu-2-0-cyan.vercel.app/"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group ">
        <div className="space-y-3">
          <h2 className="">Weather Application</h2>
          <p className="text-lg">
            It is a free weather application. I used the FreeWeather API for the
            data of the weather details. This application doesn't support the
            live weather feature. A user can view the forecast up to three days.
            They can also view the details of a particular day like the air
            quality, UV index, rain probability, etc. for a a particular city.
            If the city does not exist then it will show 404 error.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              React.JS
            </span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">SCSS</span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              FreeWeather API
            </span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              REST API
            </span>
          </div>
        </div>
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://github.com/deeparka/weather-app"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            href="https://weather-app-pi-three.vercel.app/"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group ">
        <div className="space-y-3">
          <h2 className="">Dojo-Blog Application</h2>
          <p className="text-lg">
            It is a blog writing application. I created a local database for the
            data of the weather details. This application doesn't support the
            live weather feature. A user can view the forecast up to three days.
            They can also view the details of a particular day like the air
            quality, UV index, rain probability, etc. for a a particular city.
            If the city does not exist then it will show 404 error.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              React.JS
            </span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">CSS</span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              REST API
            </span>
          </div>
        </div>
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://github.com/deeparka/dojo-blog"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            href="https://dojo-blog-delta.vercel.app/"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group ">
        <div className="space-y-3">
          <h2 className="">Scramble Game Application</h2>
          <p className="text-lg">
            It is a simple word rearranging application. It is my first
            application using Vanilla.js and my first ever project. When a user
            guess e word correctly it then goes to next word. If user guesses it
            wrong then he/ she willbe given another chance to guess.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              Vanilla.JS
            </span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">CSS</span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">HTML</span>
          </div>
        </div>
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://github.com/deeparka/scramble-game"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            href="https://scramble-game-nine.vercel.app/"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group ">
        <div className="space-y-3">
          <h2 className="">Bluetooth KeyChain Web Application</h2>
          <p className="text-lg">
            It is a simple keychain application. When a user wants to buy any
            bluetooth products they can add it in the cart and purchase it. The
            user can also read reviews about the products and read articles
            also.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">Figma</span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              Google
            </span>
          </div>
        </div>
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://www.figma.com/file/zViuTgjhvODAuxOu1XIIYw/Bluetooth-KeyChain-Website?t=mDstwIdr1zzvU8YS-6"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Design File
          </a>
          <a
            href="https://www.figma.com/proto/zViuTgjhvODAuxOu1XIIYw/Bluetooth-KeyChain-Website?node-id=0%3A1"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group ">
        <div className="space-y-3">
          <h2 className="">Bluetooth KeyChain iOS Application</h2>
          <p className="text-lg">
            It is a simple Bluetooth application UI design using Figma. It helps
            the users to keep on their healthy routine. If the user lost
            something valuable like the keys or the bag user was carrying the
            buzzer in the application buzzes instantly and alerts the user. The
            user can track their belongings with the help of the Map of the
            application.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">Figma</span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              Google
            </span>
          </div>
        </div>
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://www.figma.com/file/NsMQdfUYQxLzcgawettKMv/Bluetooth-KeyChain-Draft?t=mDstwIdr1zzvU8YS-6"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Design File
          </a>
          <a
            href="https://www.figma.com/proto/NsMQdfUYQxLzcgawettKMv/Bluetooth-KeyChain-Draft?node-id=0%3A1"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded-xl overflow-hidden mt-8 lg:my-14 py-4 px-6 bg-customGrey group ">
        <div className="space-y-3">
          <h2 className="">Quiz Web Application</h2>
          <p className="text-lg">
            It is a quiz UI designed using Figma. The user has to log in or
            signup. they can take up the quiz according to the topic they like.
            At last, they can view their score. There is a dashboard where they
            can check their positions. After using the application they can log
            out or not it's their choice.
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="font-semibold text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-start items-start space-x-1">
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">Figma</span>
            <span className="bg-customBlack px-2 py-3 mt-2 rounded">
              Google
            </span>
          </div>
        </div>
        <hr className="my-4 text-customWhite py-1" />
        <div className="flex flex-row flex-wrap space-x-2">
          <a
            href="https://www.figma.com/file/YXdOeuwPsk0nLTF0RAgMEt/Quiz-Application?t=mDstwIdr1zzvU8YS-6"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Design File
          </a>
          <a
            href="https://www.figma.com/proto/YXdOeuwPsk0nLTF0RAgMEt/Quiz-Application?node-id=0%3A1"
            className="block bg-customRed mt-3 px-7 py-3 rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
