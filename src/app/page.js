const Home = () => {
  return (
    <>
      <div className={`w-screen bg-minor min-h-screen justify-center items-center flex flex-col`}>
        <div className={` w-[100px] h-[100px] bg-primary`}> </div>
        <div className={` w-[100px] h-[100px] bg-secondary`}> </div>
        <div className={` w-[100px] h-[100px] bg-ternary`}> </div>
        <div>
          <p className={`font-primary`}>This should be an Inter font family</p>
          <p className={`font-secondary`}>This should be a GeistVF font family</p>
        </div>
      </div>
    </>
  );
};

export default Home;
