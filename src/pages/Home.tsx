import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { getLocalizedText } = useLanguage();

  return (
    <div className="pt-16">
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
          alt={getLocalizedText('home.featuredImageAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light mb-4">{getLocalizedText('home.welcome')}</h1>
            <p className="text-xl">{getLocalizedText('home.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;