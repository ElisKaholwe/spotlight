'use client';
import { useState } from 'react';
import { IoCalendar, IoMenu, IoClose, IoDocument, IoFolderOpen, IoHome, IoLogoBehance, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitch, IoLogoTwitter, IoPeople } from 'react-icons/io5';
const Hero = () => {
  const [Value, setValue] = useState(false);
  const showModal = () => {
    setValue(true);
  };
  const hideModal = () => {
    setValue(false);
  };
  const [menuValue, setmenuValue] = useState(false);
  const showMenu = () => {
    setmenuValue(!menuValue);
  };
  return (
    <>
      <div className={`w-screen relative h-screen flex flex-col justify-center items-center`}>
        {menuValue ? (
          <nav className={`absolute min-w-[20%] min-h-full flex flex-col space-y-8  p-[1.25rem] top-0 left-0 bg-black bottom-0`}>
            <header className={`flex space-x-3 items-center justify-between`}>
              <h1 className={`text-[24px] text-white font-[inter] font-[400]`}>
                bugverse
                <span className={`text-blue-500 text-[26px] font-[centauri]`}>IO</span>
              </h1>
              <button onClick={showMenu}>
                <IoClose className={`text-4xl text-white`} />
              </button>
            </header>
            <ul className={`flex flex-col space-y-3`}>
              <li className={`flex space-x-3 items-center`}>
                <IoHome className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Home</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoPeople className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Team</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoFolderOpen className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Projects</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoCalendar className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Calendar</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoDocument className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Documents</span>
              </li>
            </ul>
            <footer className={`flex space-x-4  bottom-[20px]  absolute text-blue-500 text-2xl`}>
              <IoLogoFacebook />
              <IoLogoTwitter />
              <IoLogoLinkedin />
              <IoLogoBehance />
              <IoLogoTwitch />
            </footer>
          </nav>
        ) : (
          <button onClick={showMenu} className={`absolute top-[25px] left-[30px] text-4xl text-blue-500`}>
            <IoMenu />
          </button>
        )}

        <button onClick={showModal} className={`bg-blue-500 px-2 py-[1px] rounded-sm shadow-sm text-white text-[14px] capitalize`}>
          show modal
        </button>
        {Value ? (
          <div className={`absolute top-auto rounded-[2px] flex flex-col justify-center items-center bg-black w-[500px] h-[250px] `}>
            <button onClick={hideModal}>
              <IoClose className={`text-3xl top-[10px]  absolute right-[15px] text-white`} />
            </button>
            <p className={`text-[18px] text-blue-500 font-[poppins]`}>Modal Content</p>
          </div>
        ) : (
          ``
        )}
      </div>
      <div className={`w-screen relative h-screen flex flex-col justify-center items-center`}>
        {menuValue ? (
          <nav className={`absolute min-w-[20%] min-h-full flex flex-col space-y-8  p-[1.25rem] top-0 left-0 bg-black bottom-0`}>
            <header className={`flex space-x-3 items-center justify-between`}>
              <h1 className={`text-[24px] text-white font-[inter] font-[400]`}>
                bugverse
                <span className={`text-blue-500 text-[26px] font-[centauri]`}>IO</span>
              </h1>
              <button onClick={showMenu}>
                <IoClose className={`text-4xl text-white`} />
              </button>
            </header>
            <ul className={`flex flex-col space-y-3`}>
              <li className={`flex space-x-3 items-center`}>
                <IoHome className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Home</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoPeople className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Team</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoFolderOpen className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Projects</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoCalendar className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Calendar</span>
              </li>
              <li className={`flex space-x-3 items-center`}>
                <IoDocument className={`text-[22px] text-neutral-400`} />
                <span className={`text-[18px] text-white font-[poppins] font-[400]`}>Documents</span>
              </li>
            </ul>
            <footer className={`flex space-x-4  bottom-[20px]  absolute text-blue-500 text-2xl`}>
              <IoLogoFacebook />
              <IoLogoTwitter />
              <IoLogoLinkedin />
              <IoLogoBehance />
              <IoLogoTwitch />
            </footer>
          </nav>
        ) : (
          <button onClick={showMenu} className={`absolute top-[25px] left-[30px] text-4xl text-blue-500`}>
            <IoMenu />
          </button>
        )}

        <button onClick={showModal} className={`bg-blue-500 px-2 py-[1px] rounded-sm shadow-sm text-white text-[14px] capitalize`}>
          show modal
        </button>
        {Value ? (
          <div className={`absolute top-auto rounded-[2px] flex flex-col justify-center items-center bg-black w-[500px] h-[250px] `}>
            <button onClick={hideModal}>
              <IoClose className={`text-3xl top-[10px]  absolute right-[15px] text-white`} />
            </button>
            <p className={`text-[18px] text-blue-500 font-[poppins]`}>Modal Content</p>
          </div>
        ) : (
          ``
        )}
      </div>
    </>
  );
};

export default Hero;
