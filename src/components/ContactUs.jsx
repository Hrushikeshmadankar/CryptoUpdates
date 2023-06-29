import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_qdhtqms",
        "template_duvygkh",
        e.target,
        "UhtHhs7ujZsAcMw5S"
      )
      .then(() => {
        console.log("done");
        setIsSending(false);
        setIsSent(true);
      })
      .catch((error) => {
        console.log(error.text);
        setIsSending(false);
        setIsSent(false);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="wrapper-container">
      <div className="p-10 mt-40 shadow-[0_0px_50px_3px_rgb(0,0,255,0.1)] rounded-2xl h-auto ">
        <div className="font-bold tracking-tight text-[#111827] sm:text-4xl text-center pb-[30px]">
          Contact Us
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {isSent ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Your message has been sent successfully!
            </div>
          ) : null}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              name="user_name"
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              name="user_email"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Enter your message"
              value={message}
              name="message"
              onChange={handleMessageChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
