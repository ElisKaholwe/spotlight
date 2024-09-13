'use client';
import Link from 'next/link';
import {
  IoArrowBack,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailSharp,
} from 'react-icons/io5';
import styles from './NavigationBar.module.css';
import { navigationLinks } from '../app/constants/index';
import { useContext } from 'react';
import { NavigationBarContext } from '../contexts/ContextOne';

//Google Question : Should a Navigation Bar be auto removed or should it be Manual Removed by the User ???
const NavigationBar = () => {
  const { isToggled, setisToggled } = useContext(NavigationBarContext);
  const closeNavBar = () => {
    setisToggled(!isToggled);
  };
  return (
    <>
      {/* Intentionally This Color Can Be Used as a Backgroud [#1c1c1c] */}
      <nav
        className={`bg-PrimaryBlack z-50 px-4 py-4 absolute overflow-auto right-0 w-[100vw] h-[calc(60vh-7vh)] lg:w-[22.5vw] `}>
        <div className={`w-full min-h-full flex flex-col justify-between`}>
          <ul className={`flex flex-col space-y-2`}>
            {/* Imported Navigation Links */}
            {navigationLinks.map((link) => (
              <Link onClick={closeNavBar} key={link.id} href={link.href}>
                <li className={`${styles.listItem}  `}>
                  <span className={`${styles.listIcons}`}>{link.icon}</span>
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
          {/*End of Imported Navigation Links*/}

          {/* Footer Section */}
          <footer className={``}>
            <h1 className={`text-PrimaryWhite relative font-primary font-[700] text-[17px]`}>
              <Link onClick={closeNavBar} href='/'>
                sp⌬t<span className='text-[19px] font-primary font-[600] text-BlueSpecial italic'></span>Light
              </Link>
            </h1>
            {/* Footer Icons & Button */}
            <div>
              <div className={` xxs:grid xxs:grid-cols-2 xxs:space-x-3 grid-cols-1 justify-start`}>
                <div className={`flex  space-x-1 `}>
                  <IoLogoFacebook className={`${styles.SocialIcon}`} />
                  <IoLogoTwitter className={`${styles.SocialIcon}`} />
                  <IoLogoInstagram className={`${styles.SocialIcon}`} />
                  <IoLogoYoutube className={`${styles.SocialIcon}`} />
                  <IoMailSharp className={`${styles.SocialIcon}`} />
                  <IoLogoGithub className={`${styles.SocialIcon}`} />
                </div>
                <button className={` bg-BlueSpecial text-PrimaryWhite text-[12px] px-2 py-[1px] font-primary font-[400]`}>
                  <Link onClick={closeNavBar} href='/'>
                    Made in sp⌬tLight
                  </Link>
                </button>
              </div>
              <h1 className={`text-[#616161] text-[14px] font-[400]`}>&copy;{new Date().getFullYear()} sp⌬tLight,Inc </h1>
            </div>
            {/* End of Footer Icons & Button */}
          </footer>
          {/* End of the Footer Section */}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
