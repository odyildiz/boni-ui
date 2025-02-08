import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { getLocalizedText } = useLanguage();

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8 text-center border-b-2 border-[#C8B6A6] pb-4">{getLocalizedText('contact.title')}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('contact.visitUs')}</h2>
            <div className="space-y-4">
              <a
                href="tel:+905365689224"
                className="flex items-center hover:text-[#8B7355] transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                0 (536) 568 92 24
              </a>
              <a
                href="https://maps.app.goo.gl/nJcyFHrxSWMU79xHA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#A4907C] hover:text-[#8B7355] transition-colors mb-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Rasimpaşa, Duatepe Sk. 43/a, 34716 Kadıköy/İstanbul
              </a>
              <div className="w-full h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.350173353686!2d29.027338076128316!3d40.99570817135243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab983794ef2ad%3A0x8b9de79d43e2e8fd!2sBoni%20Coffee%20%26%20Studio!5e0!3m2!1sen!2str!4v1739017469139!5m2!1sen!2str%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boni Cafe & Studio Location"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('contact.hours')}</h2>
            <div className="space-y-2 bg-[#F9F5F2] p-4 rounded-lg">
              <p className="text-[#A4907C] font-medium">{getLocalizedText('contact.mondayClosed')}</p>
              <p className="text-[#8B7355]">{getLocalizedText('contact.otherDays')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;