import React from "react";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import whatsapp from "../images/whatsapp.png";
import gmail from "../images/gmail.png";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function ContactDrawer() {
  function handleLinkedIn() {
    window.open("https://www.linkedin.com/in/arkadeep-prasad-1b5074201/");
    // window.location.href = 'https://www.linkedin.com/in/arkadeep-prasad-1b5074201/'
  }

  function handleGithub() {
    window.open("https://github.com/deeparka");
    // window.location.href = 'https://www.linkedin.com/in/arkadeep-prasad-1b5074201/'
  }

  function handleTwitter() {
    window.open("https://twitter.com/arkadeep_prasad");
  }

  function handleGmail() {
    alertify.alert("Email ID", "arkadeep180@gmail.com");
  }

  function handleWhatsApp() {
    alertify.alert("WhatsApp Number", "9593527725");
  }

  return (
    <div className="fixed top-180px left-2 w-auto h-auto p-5 z-40 rounded-xl bg-customGrey
    ">
      <img
        src={linkedin}
        alt="LinkedIn"
        className="h-16 w-16"
        onClick={handleLinkedIn}
      />
      <img
        src={github}
        alt="Github"
        className="mt-3 h-16 w-16"
        onClick={handleGithub}
      />
      <img
        src={twitter}
        alt="Twitter"
        className="mt-3 h-16 w-16"
        onClick={handleTwitter}
      />
      <img
        src={gmail}
        alt="Gmail"
        className="mt-3 h-16 w-16"
        onClick={handleGmail}
      />
      <img
        src={whatsapp}
        alt="WhatsApp"
        className="mt-3 h-16 w-16"
        onClick={handleWhatsApp}
      />
    </div>
  );
}

export default ContactDrawer;
