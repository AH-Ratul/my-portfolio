import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMP_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("error occured");
        }
      );
  };

  return (
    <div className="pb-5">
      <h1 className="mx-auto text-center text-3xl font-bold border-b-2 border-teal-700 w-[60%] md:w-[30%] pb-1 mt-12">
        Contact
      </h1>
      <p className="mx-auto text-center py-3 text-base">
        Feel free to knock me if you have any query
      </p>
      <div className="mx-auto mt-3  max-w-[550px]  p-5 ">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <p className="text-base font-semibold">Name</p>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="bg-inherit border-2 ps-2 py-2 w-full my-3 rounded focus:border-teal-700 outline-none"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Email</p>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="ps-2 py-2 w-full bg-inherit border-2 my-3 rounded focus:border-teal-700 outline-none"
            />
          </div>

          <div>
            <p className="text-base font-semibold">Subject</p>
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              className="bg-inherit border-2 ps-2 py-2 w-full my-3 rounded focus:border-teal-700 outline-none"
            />
          </div>
          <div>
            <p className="text-base font-semibold">Message</p>
            <textarea
              name="message"
              cols="35"
              rows="10"
              className="border-2 border-white/70 w-full bg-inherit p-2 my-3 rounded focus:border-teal-700 outline-none"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send"
            className="border-2 border-teal-700 hover:border-teal-500 rounded-md text-base font-semibold mt-4 py-2 px-5 cursor-pointer transition duration-1000 ease-out"
          />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
