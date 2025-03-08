import homeImage from '../../media/home.jpeg';
const Home = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div className="px-2 sm:px-8 py-2 sm:py-8">
        <div className="py-4 sm:py-12 px-2 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4 sm:mb-8 text-gray-200 font-['Big_Shoulders_Stencil']">ÖZENÇ YILDIZ PHOTOGRAPHER</h1>
        </div>
        <img
          src={homeImage}
          className="w-full h-auto rounded-lg shadow-lg border border-gray-800"
          alt="Özenç Yıldız Photography"
        />
      </div>
    </div>
  );
};

export default Home;