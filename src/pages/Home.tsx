const Home = () => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="py-24 px-4 text-center">
        <h1 className="text-5xl font-light mb-8 text-[#8B7355]">ÖZENÇ YILDIZ PHOTOGRAPHER</h1>
      </div>
      <div className="px-8 mb-16">
        <img
          src= '../../media/home.jpeg'
          className="w-full h-auto rounded-lg shadow-lg"
          alt="Özenç Yıldız Photography"
        />
      </div>
    </div>
  );
};

export default Home;