import { Mail, PhoneCall, MapPin } from "lucide-react";
import React from "react";

function ContactUs() {
  return (
    <div id="contact" className="w-full  xl:h-[1100px] flex flex-col gap-32   mb-48 ">
      <h3 className="text-black text-center text-2xl font-bold">Contact us</h3>
      <div className="w-full xl:w-[80%] h-full mx-auto flex flex-col xl:flex-row">
        <div className="w-full xl:w-[40%] flex flex-col gap-4 xl:gap-20  text-white bg-black h-full">
          <div className="px-10 xs2:px-6 sm:px-16 py-20 flex flex-col gap-4">
            <h3 className="text-xl">Contact information</h3>
            <p className="text-base ">Say something to start a live chat!</p>
          </div>
          <div className="px-10 xs2:px-6 my-6 sm:px-16">
            <ContactInfo icon={1} text="0549884923" />
            <ContactInfo icon={2} text="inkyhouse11@gmail.com" />
            <ContactInfo icon={3} text="Sidi Bel Abesse" />
            <ContactInfo icon={4} text="inkyhouse" />
          </div>
        </div>
        <div className="w-full xl:w-[60%] flex justify-center  p-10 bg-main h-full">
          <form className="w-full h-full flex flex-col gap-5 ">
            <div className="w-full sm:my-8 flex flex-col sm:flex-row gap-6">
              <div className="inputContainer">
                <label htmlFor="fn">First name</label>
                <input
                  className="contactInput"
                  id="fn"
                  type="text"
                  placeholder="Mhamedi"
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="fn">Last name</label>
                <input
                  className="contactInput"
                  id="ln"
                  type="text"
                  placeholder="Walid"
                />
              </div>
            </div>
            <div className="w-full sm:my-8 flex flex-col sm:flex-row  gap-6">
              <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input
                  className="contactInput"
                  id="email"
                  type="email"
                  placeholder="fodil@gmail.com"
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="phone">Phone number</label>
                <input
                  className="contactInput"
                  id="phone"
                  type="number"
                  placeholder="+54884923"
                />
              </div>
            </div>
            <div className="w-full sm:my-8 inputContainer gap-10">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                className="contactInput w-full h-40"
                placeholder="enter your message"
              />
            </div>
            <div className="w-full my-6 flex justify-center sm:justify-end">
              <button className="bg-black sm:scale-100 scale-90 py-4 px-6 rounded-full text-white">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

function ContactInfo({ text, icon }) {
  return (
    <div className="flex gap-6 my-8 items-center">
      {icon == 1 && <PhoneCall size={23} />}
      {icon == 2 && <Mail size={23} />}
      {icon == 3 && <MapPin size={23} />}
      {icon == 4 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26px"
          height="26px"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path
            d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
            stroke="white"
            stroke-width="2"
          />
          <circle cx="16.5" cy="7.5" r="1.5" fill="white" />
          <circle cx="12" cy="12" r="3" stroke="white" stroke-width="2" />
        </svg>
      )}
      <p>{text} </p>
    </div>
  );
}
