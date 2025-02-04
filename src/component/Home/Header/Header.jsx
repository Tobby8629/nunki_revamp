import { botLogo } from '/public/images/Nunki/nunkiImages'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section>
      <header className={`main_section ${style.headerwrapper}`}>
        <div className={style.header}>
          <div className={style.image}>
            <img src={botLogo} alt='brand logo' />
          </div>
          <div className={style.text}>
            <h2>Shine Brighter with <br/>NUNKI Insurance</h2>
            <p>Instant, Honest Coverage at Unbeatable Rates.</p>
            <div className={style.button}>
              <Link to='prices'>
                <button>Choose A Product</button>
              </Link>
            </div>
          </div>
        </div>
          <div className={style.button}>
            <Link to='prices'>
              <button>Get Quote</button>
            </Link>
          </div>
    
      </header>
    </section>
  )
}

export default Header