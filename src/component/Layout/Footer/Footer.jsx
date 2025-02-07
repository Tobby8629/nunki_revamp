import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import footer from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaSquareXTwitter } from "react-icons/fa6";
import { logo } from '../../../../public/images/Nunki/nunkiImages';
import UseQuery from '../../../api/query';
import useCustomMutation from '../../../api/Mutation';
import { useQueryClient } from '@tanstack/react-query';
import { footerLinks } from '../../../constants';
import { handleSubscribe } from '../../../api/apifuncs';

const Footer = () => {
  const [email, setEmail] = useState('');
  const {data} = UseQuery({query:'getEmails', method:'get', endpoint:'subscribers'})
  const {mutate, isLoading: subLoading} = useCustomMutation()
  const queryClient = useQueryClient()

  return (
    <footer className={footer.footer}>
      <div className={footer.desktop_footer}>
        <div className={footer.desktop_logo}>
          <div  className={footer.logo}>
            <Link to="/">
              <img src={logo} alt="nunki-banner" />
            </Link>
          </div>
          <div className={footer.subscribe}>
            <input 
              type='email' 
              placeholder='your email' 
              name='email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button onClick={()=>
              handleSubscribe(email, data, mutate, queryClient, setEmail)} 
              disabled={subLoading}
            >
              {subLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </div>
        <div className={footer.link}>
          {footerLinks?.map((e)=>(
            <ul key={e?.header} className={footer.eachcol}>
              <h2>{e?.header}</h2>
              {e?.links?.map((link)=>(
                <li key={link?.name}>
                  <Link to={link?.link} onClick={() => (link?.name)}>{link?.name}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className={footer.socials}>
        <Link to='https://www.instagram.com/nunki_online/'><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to='https://www.linkedin.com/company/nunki-africa/'><FontAwesomeIcon icon={faLinkedin} /></Link>
        <Link to=''><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link to='https://x.com/Nunki_Africa'><FaSquareXTwitter /></Link>
      </div>
      <div className={footer.copy_rights}>
        <p className={footer.abtnunki}>Nunki Africa (Pty) Ltd is a Juristic Representative of Live Wire CCS an Authorised Financial Service Provider – FSP License No. 40374</p>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;