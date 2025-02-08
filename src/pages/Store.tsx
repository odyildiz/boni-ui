import { useLanguage } from '../context/LanguageContext';

const Store = () => {
  const { getLocalizedText } = useLanguage();
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d")',
      }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 text-center text-white space-y-4">
        <h1 className="text-5xl font-light mb-4">{getLocalizedText('coming.soon')}</h1>
      </div>
    </div>
  );
}

export default Store;