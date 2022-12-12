import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-customBlack py-16 px-8 md:px-16 lg:px-100px">
        <div className="text-center grid gap-8 grid-cols-4 lg:grid-cols-12">
          <section className="space-y-2 col-span-4 sm:col-span-2 lg:col-span-3">
            <h2 className="">Arkadeep Prasad</h2>
            <p className="text-xl">Frontend & UI developer</p>
          </section>
          <section className="space-y-2 col-span-4 sm:col-span-2 lg:col-span-3">
            <h2 className="">Get in touch</h2>
            <p className="text-lg">arkadeep180@gmail.com</p>
            <p className="text-lg">+91-9593527725</p>
          </section>
          <section className="space-y-2 col-span-4 sm:col-span-2 lg:col-span-3">
            <h2 className="">Connect</h2>
            <a
              className="block text-lg cursor-pointer"
              href="https://www.linkedin.com/in/arkadeep-prasad-1b5074201/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="block text-lg cursor-pointer"
              href="https://www.instagram.com/mollen_mist57/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="block text-lg cursor-pointer"
              href="https://twitter.com/arkadeep_prasad"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </section>
          <section className="space-y-2 col-span-4 sm:col-span-2 lg:col-span-3">
            <h2>Address</h2>
            <p className="text-lg">Kolkata, India</p>
          </section>
        </div>
        <hr className="mt-10 mb-3" />
        <p className="text-center">
          2022 @copyright, made by{" "}
          <a className="underline cursor-pointer" href="/">
            @Arkadeep
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
