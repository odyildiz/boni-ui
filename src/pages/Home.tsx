import homeImage from '../../media/home.jpeg';
const Home = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div className="px-8 py-8">
      <div className="py-12 px-4 text-center">
        <h1 className="text-5xl font-light mb-8 text-gray-200">ÖZENÇ YILDIZ PHOTOGRAPHER</h1>
      </div>
        <img
          src= {homeImage}
          className="w-full h-auto rounded-lg shadow-lg border border-gray-800"
          alt="Özenç Yıldız Photography"
        />
      </div>
    </div>
  );
};

export default Home;