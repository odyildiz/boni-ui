import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">Contact</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-light mb-4">Visit Us</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Rasimpaşa, Duatepe Sk. 43/a, 34716 Kadıköy/İstanbul
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                0 (536) 568 92 24
              </p>
              {/*
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                hello@photostudio.com
              </p>
              */}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-light mb-4">Hours</h2>
            <div className="space-y-2">
                <p>Monday: Closed</p>
                <p>Other Days: 11am - 10pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;