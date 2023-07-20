import React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'


export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
       <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.7459133830143!2d82.23116857533864!3d16.937821215600234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827e916fe3cf9%3A0x3a1c2d38174d88e6!2s54-2-12%2C%20Yesu%20Vari%20St%2C%20Lankada%20vari%20peta%2C%20Jagannaickpur%2C%20Kakinada%2C%20Andhra%20Pradesh%20533002!5e0!3m2!1sen!2sin!4v1689831077633!5m2!1sen!2sin"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Jagannaickpur, Kakinada <br />
                Andhra Pradesh- 533002
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:nvssrkameswar@email.com" className="text-indigo-400 leading-relaxed">
                nvssrkameswar@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91 6305409169</p>
            </div>
          </div>
        </div> 
        <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    {({ handleChange, success, error }) => (
      <>
        <Honeypot />
        {success && <p>Thanks for contacting us!</p>}
        {error && (
          <p>Sorry, we could not reach our servers. Please try again later.</p>
        )}
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
        </h2>
        <p className="leading-relaxed mb-5">
            I'm adaptable to new technologies and can work well in the team environments. Drop me a message!
        </p>
        <div className="relative mb-4">
          <label htmlFor='name'
                 className="leading-7 text-sm text-gray-400">
            Name:
          </label>
          <input type='text'
                 name='name' 
                 id='name' 
                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 onChange={handleChange}/>
        </div>
        <div className="relative mb-4">
          <label htmlFor='email'
                 className="leading-7 text-sm text-gray-400">
            Email:
          </label>
          <input type='email'
                 name='email'
                 id='email' 
                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 onChange={handleChange} />
        </div>
        <div className="relative mb-4">
          <label htmlFor='message'
                 className="leading-7 text-sm text-gray-400">
              Message:
          </label>
          <textarea
            type='text'
            name='message'
            id='message'
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type='submit'
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
          </button>
        </div>
      </>
    )}
  </NetlifyForm>
      </div>
    </section>
  );
}