import bioJpeg from '../../media/bio.jpeg';
import { useLanguage } from '../context/LanguageContext';

const Bio = () => {
  const { getLocalizedText } = useLanguage();
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8 text-[#C8B6A6] text-center">{getLocalizedText('bio.title')}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={bioJpeg}
          alt="Photographer portrait"
          className="w-full h-128 object-cover"
        />
        <div className="text-gray-300 text-justify">
          <p className="mb-4">
            {getLocalizedText('bio.p1')}  
          </p>
          <p className="mb-4">
            {getLocalizedText('bio.p2')}  
          </p>
          <p className="mb-4">
            {getLocalizedText('bio.p3')}  
          </p>
          <p className="mb-4">
            {getLocalizedText('bio.p4')}  
          </p>
          <p className="mb-4">
            {getLocalizedText('bio.p5')}  
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;