import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { getLocalizedText } = useLanguage();

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">{getLocalizedText('contact.title')}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">{getLocalizedText('contact.name')}</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">{getLocalizedText('contact.email')}</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">{getLocalizedText('contact.message')}</label>
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
              {getLocalizedText('contact.send')}
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('contact.visitUs')}</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Rasimpaşa, Duatepe Sk. 43/a, 34716 Kadıköy/İstanbul
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                0 (536) 568 92 24
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('contact.hours')}</h2>
            <div className="space-y-2">
              <p>{getLocalizedText('contact.mondayClosed')}</p>
              <p>{getLocalizedText('contact.otherDays')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;