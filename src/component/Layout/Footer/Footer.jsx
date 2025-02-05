import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'; 
// import banner from '../../../assets/Nunki/logo.png';
import { Link } from 'react-router-dom';
import footer from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaSquareXTwitter } from "react-icons/fa6";
// import { newSubscriber } from '../../../redux/subscriberSlice';
import Query from '../../../api/query';
import { logo } from '../../../../public/images/Nunki/nunkiImages';
import UseQuery from '../../../api/query';

const Footer = () => {
  const [links, setlinks] = useState([
    {header: "products", links: [
      {name:'Funeral Cover', link:'/products/funeral/insure'}, 
      {name:'Teacher Online', link:'products/teacher_online/insure'},
      {name:'Shack Insurance', link:'/products/shack/insure'},
      {name:'Medical Advice', link:'/products/medical_advice'},
      {name:'Emergency Medical Response', link:'/products/emergencymedicalresponse'}
    ]},
    {header: "company", links: [
      {name:'About us', link:'/about'}, 
      {name:'Blogs', link:'/blogs'},
      {name:'Nunki difference', link:'/differences'},
    ]},
    {header: "Help", links: [
      {name:'FAQs', link:'/faqs'},
      {name:'Contact Us', link:'/contact'},
    ]},
  ]);

  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
//   const dispatch = useDispatch();

//   const getEmals = async () => {
//     try {
//       const response = await fetch('https://nunkiapi-kkr1.onrender.com/api/v1/subscribers');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);   
//     }
//   };


  const {data, isLoading} = UseQuery({query:'getEmails', method:'get', endpoint:'subscribers'})
  console.log(data, "data")

  const handleSubscribe = async () => {
    if (!email) {
      Swal.fire({
        background: '#f4f4f4',
        width: 300,
        position: "center",
        icon: 'error',
        title: 'Empty Email',
        text: 'Please enter your email address before subscribing.',
        showConfirmButton: true,
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        width: 300,
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        showConfirmButton: true,
      });
      return;
    }

    setIsSubscribing(true);

    try {
      const emails = await getEmals();
      const isSubscribed = emails.some((e) => e.email === email);
      if (isSubscribed) {
        Swal.fire({
          width: 300,
          icon: 'error',
          title: 'Already Subscribed',
          text: 'You have already subscribed with this email address.',
          showConfirmButton: true,
        });
        return;
      }
      const subscription = {
        email: email,
        subscription_date: new Date().toISOString()
      };

      await dispatch(newSubscriber(subscription));
      Swal.fire({
        width: 300,
        position: "center",
        icon: 'success',
        title: 'Subscription Successful!',
        text: 'Thank you for subscribing.',
        showConfirmButton: true,
      });
      setEmail('');
    } catch (error) {
      console.error(error);
      Swal.fire({
        width: 300,
        icon: 'error',
        title: 'Subscription Failed',
        text: 'An error occurred while subscribing. Please try again later.',
        showConfirmButton: true,
      });
    } finally {
      setIsSubscribing(false);
    }
  };

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
            <button onClick={handleSubscribe} disabled={isSubscribing}>
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </div>
        <div className={footer.link}>
          {links?.map((e)=>(
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