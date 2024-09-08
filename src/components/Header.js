'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { useState } from 'react';
import { IoOpenOutline, IoMenuOutline, IoCloseSharp } from 'react-icons/io5';
import NavigationBar from './NavigationBar';
import { NavigationBarContext } from '../contexts/ContextOne';
const Header = () => {
  const [isToggled, setisToggled] = useState(false);
  const handleClick = () => {
    setisToggled(!isToggled);
  };
  const Close = <IoCloseSharp onClick={handleClick} className={`text-PrimaryWhite text-3xl`} />;
  const Menu = <IoMenuOutline onClick={handleClick} className={`text-3xl text-PrimaryWhite`} />;

  return (
    <>
      {/* An Ad Banner  Try With Background (PurpleSpecial) */}
      {/* An Ad Banner Can be Customized and Appear with a Multicolor Background Theme */}
      {/*<div className={`bg-PinkSpecial w-screen min-h-[4vh] flex flex-col justify-center items-center `}>*/}
      <div className={`bg-PurpleSpecial w-screen min-h-[4vh] flex flex-col justify-center items-center `}>
        <h1 className={`font-primary text-[12px] text-center font-[400] xxs:text-[13px] text-PrimaryWhite`}>
          You can rent an ad-space in our site.{' '}
          <Link href='/articles'>
            <span className={`underline text-[13px] text-NeutralStone`}>Start here</span>
            {'   '}
            <IoOpenOutline className={`inline-block text-NeutralStone text-[13px]`} />
          </Link>
        </h1>
      </div>
      {/* End of an Ad Bannner */}

      {/* The Header Section */}
      <header className={` bg-black w-screen h-[7vh] z-50 top-0 sticky right-0 left-0 px-3 `}>
        {/*<header className={` bg-gradient-to-br from-indigo-700 to-pink-600 w-screen h-[7vh] z-50 top-0 sticky right-0 left-0 px-3 `}>*/}
        <div className={` w-full h-full flex items-center justify-between  `}>
          <Link href='/'>
            <h1 className={`text-PrimaryWhite relative font-primary font-[700] text-[26px]`}>
              sp⌬t<span className='text-[32px] font-primary font-[600] text-PrimaryWhite italic'></span>Light
            </h1>
          </Link>
          <div className={`flex items-center space-x-4`}>
            <Link href='/articles'>
              <h1
                className={`text-PrimaryWhite text- inline relative ${styles.linkUnderline} font-primary text-[13px] font-[400]`}>
                Support us
              </h1>
            </Link>
            <button>{isToggled ? Close : Menu}</button>
          </div>
        </div>
        <NavigationBarContext.Provider value={{ isToggled, setisToggled }}>
          {isToggled && <NavigationBar />}
        </NavigationBarContext.Provider>
      </header>
      {/* End of the Header Section  */}
    </>
  );
};
export default Header;

//⌬
