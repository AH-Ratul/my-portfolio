import React from "react";

const Contacts = () => {
  return (
    <div className="pb-5">
      <h1 className="mx-auto text-center text-3xl font-bold border-b-2 border-teal-700 w-[60%] md:w-[30%] pb-2 mt-12">
        Contact
      </h1>
      <p className="mx-auto text-center py-3 text-base">Feel free to knock me if you have any query</p>
      <div className="mx-auto mt-10  max-w-[550px]  p-5 ">
        <div className="">
        <div>
          <p className="text-lg font-semibold">Email</p>
          <input type="email" placeholder="Your Email" className="ps-2 py-2 w-full bg-inherit border-2 my-3 rounded focus:border-teal-700 outline-none"/>
        </div>
        <div>
          <p className="text-base font-semibold">Name</p>
          <input type="text" placeholder="Your Name" className="bg-inherit border-2 ps-2 py-2 w-full my-3 rounded focus:border-teal-700 outline-none"/>
        </div>
        </div>
        <div>
          <p className="text-base font-semibold">Subject</p>
          <input type="text" placeholder="Subject" className="bg-inherit border-2 ps-2 py-2 w-full my-3 rounded focus:border-teal-700 outline-none"/>
        </div>
        <div>
          <p className="text-base font-semibold">Message</p>
          <textarea name="place" cols="35" rows="10" className="border-2 border-white/70 w-full bg-inherit p-2 my-3 rounded focus:border-teal-700 outline-none"></textarea>
        </div>
        <button className="border-2 border-teal-700 hover:border-teal-600 rounded-md text-base font-semibold mt-4 py-2 px-5">Send</button>
      </div>
    </div>
  );
};

export default Contacts;
