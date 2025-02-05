import { useRef, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import style from "./Nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useMobileView } from '../../utils/useMobile';
import { logo } from '/public/images/Nunki/nunkiImages';
import { menu, productLinks } from '../../../constants';



const Nav = () => {
  const location = useLocation();
  const isMobile = useMobileView();
  const [navlink, setnavlink] = useState(menu);
  const myRef = useRef(null);
  const [show, setshow] = useState(false);
  const showslide = () => setshow(true);
  const hideslide = () => setshow(false);
  const opensub = (name) => {
    setnavlink(prev => prev.map(e => e.name === name ? { ...e, show: !e?.show } : e));
  };
  const matchingLink = productLinks.find(product => location.pathname.includes(product.link));
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myRef.current && !myRef.current.contains(event.target)) {
        hideslide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={style.nav}>
      <div className={`${style.wrapper} main_section`}>
        <Link to='/' className={style.image}>
          {matchingLink && isMobile ? (
            <div className={style.logoContainer}>
              <h2 className={style.logoText}>{matchingLink.name}</h2>
            </div>
          ) : (
            <img src={logo} alt='logo' />
          )}
        </Link>
        <div className={style.icon} onClick={showslide}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div ref={myRef} className={`${style.links} ${show && style.show}`}>
          <ul>
            {navlink.map((link) => (
              <li key={link?.name} className={`${style.link} ${link?.mobileOnly ? style.home_link : ''}`} onMouseLeave={() => opensub(link?.name)} onMouseEnter={() => opensub(link?.name)}>
                {link?.name === 'products pricing' ? (
                  <a className={style.drop}>
                     <h3> 
                      {link?.name} 
                      <FontAwesomeIcon className={style.linkicon} icon={link?.show ? faAngleDown : ""} />
                     </h3>   
                  </a>
                  
                ) : link?.name === 'Contact Us' ? (
                  <a className={style.drop}>
                    <h3>
                      {link?.name}
                      <FontAwesomeIcon className={style.linkicon} icon={link?.show ? faAngleDown : faAngleRight} />
                    </h3>
                  </a>
                ) : (
                  <NavLink onClick={hideslide} to={link?.link}><h3>{link?.name}</h3></NavLink>
                )}
                {link?.otherlink?.length > 0 &&
                  <div className={`${style.sub_link} ${link?.show && style.show_sublink}`}>
                    {link?.otherlink.map((e) => (
                      <NavLink key={e?.name} to={e?.link} activeclassname={style.active} onClick={() => {hideslide()}}>
                         {e?.icon ? (
                          <>
                            <FontAwesomeIcon className={style.subicons} icon={e.icon} />
                            <span className={style.subnames}>{e.name}</span>
                          </>
                          ) : (
                          <span className={style.subnames}>{e.name}</span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                }
              </li>
            ))}
          </ul>
          <div className={`${style.icon} ${style.left}`} onClick={hideslide}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className={style.btn}>
            <Link to='prices'>
              <button>Get price</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.gradient}></div>
    </nav>
  )
}

export default Nav;


 // useEffect(() => {
  //   const matchingLink = productLinks.find(product => location.pathname.includes(product.link));
  //   if (isMobile && matchingLink) {
  //     setLogoText(matchingLink.name);
  //   } else {
  //     setLogoText('');
  //     setCurrentLogo(logo);
  //   }
  // }, [location, isMobile]);

  // const [currentLogo, setCurrentLogo] = useState(logo);
  // const [logoText, setLogoText] = useState('');