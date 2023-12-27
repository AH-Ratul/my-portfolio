import React from "react";

const Contacts = () => {
  return (
    <div className="pb-5">
      <h1 className="mx-auto text-center text-3xl font-bold border-b-2 border-white/40 w-[70%] md:w-[40%] pb-2 mt-12">
        Contact
      </h1>
      <p className="mx-auto text-center py-3 text-xl">Feel free to knock me if you have any query</p>
      <div className="mx-auto mt-10  max-w-[550px]  p-5 ">
        <div className="">
        <div>
          <p className="text-lg">Email</p>
          <input type="email" placeholder="Your Email" className="ps-2 py-2 w-full bg-[#1c1d25] border my-3 rounded focus:border-purple-700 outline-none"/>
        </div>
        <div>
          <p className="text-lg">Name</p>
          <input type="text" placeholder="Your Name" className="bg-[#1c1d25] border ps-2 py-2 w-full my-3 rounded focus:border-purple-700 outline-none"/>
        </div>
        </div>
        <div>
          <p className="text-lg">Subject</p>
          <input type="text" placeholder="Subject" className="bg-[#1c1d25] border ps-2 py-2 w-full my-3 rounded focus:border-purple-700 outline-none"/>
        </div>
        <div>
          <p className="text-lg">Message</p>
          <textarea name="place" cols="65" rows="10" className="border bg-[#1c1d25] p-2 my-3 rounded focus:border-purple-700 outline-none"></textarea>
        </div>
        <button className="border rounded-md text-lg font-semibold mt-4 py-2 px-5">Send</button>
      </div>
    </div>
  );
};

export default Contacts;
