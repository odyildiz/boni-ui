const Home = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div className="py-12 px-4 text-center">
        <h1 className="text-5xl font-light mb-8 text-gray-200">ÖZENÇ YILDIZ PHOTOGRAPHER</h1>
      </div>
      <div className="px-8 py-8">
        <img
          src= '../../media/home.jpeg'
          className="w-full h-auto rounded-lg shadow-lg border border-gray-800"
          alt="Özenç Yıldız Photography"
        />
      </div>
    </div>
  );
};

export default Home;