import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMailSharp,
  IoOpenOutline,
  IoStorefront,
} from 'react-icons/io5';
import styles from './Footer.module.css';
import Link from 'next/link';
import { aboutUs, contactUs, Legal } from '../../../app/constants/index';
const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerWrapper}`}>
        <div className={`${styles.wrapperSection}`}>
          {/* Footer Header */}
          <div className={`${styles.footerHeader}`}>
            {/* bugverse Logo  -  Redirect to home page */}
            <Link href='/'>
              <h1 className={`text-white relative font-[poppins] font-[700] text-[30px]`}>
                sp⌬t<span className='text-[38px] font-[poppins] font-[600] text-BlueSpecial italic'></span>Light
              </h1>
            </Link>
            {/*.............*/}
            {/* Social Links */}

            {/*Our store*/}
            <Link href='/store'>
              <div className={`${styles.Storefront}`}>
                <IoStorefront className={`${styles.socialIcon}`} />
                <h1 className={`font-[poppins] text-neutral-200 text-[18px]`}>Our store</h1>
              </div>
            </Link>
            {/*.............*/}

            {/*A Store Note*/}
            <div className={`${styles.StoreNote}`}>
              <p className={`italic text-[13px] font-[poppins] font-[400] text-white`}>
                <span className={`text-[rgb(42,106,211)] right-[50] font-[500]`}>Please Note That : </span>By purchasing products
                from our blog-store you help us grow and manage this blog day to day. Thank you and welcome.
              </p>
            </div>
            {/*.............*/}

            {/*??? Should Social Media Icons Use their Native Color or Our Custom Footer Accent Color ???*/}
            <div className={`${styles.socialLinks}`}>
              <div>
                <h1 className={`font-[poppins] text-neutral-200 text-[18px]`}>Follow us</h1>
              </div>
              <div className={`${styles.socialIcons}`}>
                <Link className={`${styles.socialIcon}`} href='#'>
                  <IoLogoFacebook />
                </Link>
                <Link className={`${styles.socialIcon}`} href='#'>
                  <IoLogoTwitter />
                </Link>
                <Link className={`${styles.socialIcon}`} href='#'>
                  <IoLogoInstagram />
                </Link>
                <Link className={`${styles.socialIcon}`} href='#'>
                  <IoLogoYoutube />
                </Link>
                <Link className={`${styles.socialIcon}`} href='#'>
                  <IoMailSharp />
                </Link>
                <Link className={`${styles.socialIcon}`} href='#'>
                  <IoLogoWhatsapp />
                </Link>
              </div>
            </div>
            {/*.............*/}
          </div>
          {/* End of a Footer Header */}

          {/* !!! Mistake Made Here (Neutral Mistake,Correction-I Can Wrapp Up All these Contact us - About us Divs into their Own Independent Parent and Assign it as a Grid Container of 2 Columns(1.25fr1fr)) */}
          <div className={`${styles.centerWrapper}`}>
            {/* Contact Us Section */}
            <div className={`${styles.contactUs}`}>
              {contactUs.map((item, index) => (
                <>
                  <h3 className={`${styles.AddressHeader}`}> {item.header} </h3>
                  <ul key={index}>
                    {item.subHeader.map((e) => (
                      <li className={`${styles.AddressItem}`}> {e} </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
            {/* End of a Contact us Section */}

            {/* Legal Section */}
            <div className={`${styles.legal}`}>
              <div className={`${styles.contactUs}`}>
                {Legal.map((item, index) => (
                  <>
                    <h3 className={`${styles.AddressHeader}`}> {item.header} </h3>
                    <ul key={index}>
                      {item.subHeader.map((e) => (
                        <li className={`${styles.AddressItem}`}> {e} </li>
                      ))}
                    </ul>
                  </>
                ))}
              </div>
            </div>
            {/* End of a Legal Section */}

            {/* Help Center */}
            <div className={`${styles.helpCenter}`}>
              <h3 className={`${styles.AddressHeader}`}>Help Center</h3>
              <ul>
                <Link href='/'>
                  <li className={`${styles.AddressItem} ${styles.special} inline relative `}>Advertise with us</li>
                </Link>
                <Link href='/'>
                  <li className={`${styles.AddressItem}  flex items-center gap-2 `}>
                    Support us
                    <IoOpenOutline />
                  </li>
                </Link>
                <Link href='/'>
                  <li className={`${styles.AddressItem}  underline`}>Become a partner</li>
                </Link>
                <Link href='/'>
                  <li className={`${styles.AddressItem}  flex items-center gap-2 `}>
                    Affiliate <IoOpenOutline />{' '}
                  </li>
                </Link>
              </ul>
            </div>
            {/* End of a Help Center */}

            {/* Abou us */}
            <div className={`${styles.legal}`}>
              <div className={`${styles.contactUs}`}>
                {aboutUs.map((item, index) => (
                  <>
                    <h3 className={`${styles.AddressHeader}`}> {item.header} </h3>
                    <ul key={index}>
                      {item.subHeader.map((e) => (
                        <li className={`${styles.AddressItem}`}> {e} </li>
                      ))}
                    </ul>
                  </>
                ))}
              </div>
            </div>
            {/* End of an About us */}
          </div>
          {/* Outro Section */}
          <div className={`${styles.gratitude}`}>
            <p className={`font-[poppins] text-center text-NeutralWhite text-[14px]`}>
              Made with Passion and Love. All rights reserved
            </p>
            <p className={`font-[poppins] text-PrimaryWhite text-[17px]`}>&copy;{new Date().getFullYear()} sp⌬tLight/IO, Inc </p>
          </div>
          {/* End of an Outro Section */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
