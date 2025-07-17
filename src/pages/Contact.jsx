import React from "react";
import Footer from "../components/Footer";
import Title from "../components/Title"
import futureMan from "/bg/future.avif"
import { useLocation } from "react-router-dom";
function Contact() {
  const isHomePage = useLocation().pathname === "/"
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    telephone: "",
    whatsApp: "",
    mail: "",
  });

  function setFormData(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSendForm(e) {
    e.preventDefault()


  }

  return (
    <div className="flex flex-col justify-between bg-gradient-to-br from-lightOrange via-white to-lightOrange">
      <div className="relative w-full mb-20 mt-28 ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <img className="max-h-[25rem] w-full object-cover" src={futureMan} alt="future is here in genius coders academy"/>
      </div>
      <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-12 md:px-24 lg:px-44 mb-10 flex flex-col items-center">
        <Title whichSection={"contact"}>
          Get in Touch
        </Title>
        <p className="text-green max-w-2xl text-center text-xl mb-10">
          Have questions? Want to know more about our coding courses for kids? Fill the form or message us on WhatsApp!
        </p>

        <form onSubmit={handleSendForm} className="w-full bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl flex flex-col gap-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["firstName", "lastName", "whatsApp", "telephone", "mail"].map((field) => (
              <input
                key={field}
                onChange={setFormData}
                name={field}
                value={form[field]}
                className="focus:bg-lightOrange focus:border-none focus:shadow-md hover:bg-lightOrange hover:border-transparent hover:shadow-md w-full px-4 py-4 rounded-tr-2xl rounded-bl-2xl border border-green text-darkblue focus:outline-none transition"
                placeholder={field === "mail" ? "E-Mail" : field.charAt(0).toUpperCase() + field.slice(1)}
                type={field === "mail" ? "email" : field === "firstName" || field === "lastName" ? "text" : "tel"}
              />
            ))}
          </div>
          <textarea className="border border-green py-4 px-4 h-20 max-h-20 outline-none hover:bg-lightOrange hover:border-transparent hover:shadow-md" placeholder="please enter your message"></textarea>

          <div className="flex flex-col md:flex-row justify-between gap-6">
            <button
              className="flex-1 py-4 bg-gradient-to-r from-orange to-darkblue text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-none transition duration-300 cursor-pointer"
            >Send <i className="fa-solid fa-shuttle-space -rotate-45"></i></button>

            <a
              href="https://wa.me/201028815414?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
              rel="noopener noreferrer"
              target="_blank"
              className="flex-1 text-center py-4 bg-gradient-to-r from-green to-orange text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-none transition duration-300 cursor-pointer"
            >
              WhatsApp <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </form>
      </div>
      {
        !isHomePage && <Footer />
      }
    </div>
  );
}

export default Contact;
