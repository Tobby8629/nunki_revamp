import PageWrapper from "../../component/Layout/pageWrapper/PageWrapper";
import template from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <PageWrapper>
      <div className={template.headerwrapper}>
        <h2 className={template.headerText}>About Nunki Africa</h2>
      </div>
      <div className={template.main}>
        <div className={template.aboutUs}>
          <div className={template.aboutUsText}>
            <h2>Who we are</h2>
            <p>
              Welcome to Nunki Africa, where innovation meets tradition, and
              financial solutions illuminate the path to prosperity. Just as the
              star Nunki shines brightly in the celestial tapestry, our company
              stands as a beacon of hope and progress in the financial landscape
              of South Africa and beyond.
            </p>
          </div>
          <div className={template.aboutUsText}>
            <h2>Our Ethos: The Brilliance of Nunki</h2>
            <p>
              Nunki, one of the luminaries of our night sky, is a symbol of
              guidance and exploration. This star, known for its radiant light,
              mirrors the ethos of our company. We strive to be the guiding star
              for our clients, offering clarity and direction in the often
              complex world of finance. With services that span{' '}
              <strong>FinTech Insurance</strong> and{' '}
              <strong>Value-Added Products</strong>, we illuminate opportunities
              in informal areas, bringing the promise of security and growth
              where it&apos;s needed most.
            </p>
          </div>
          <div className={template.aboutUsText}>
            <h2>Our Services: A Spectrum of Solutions</h2>
            <p>
              Our suite of services is as diverse as the spectrum of light
              emanating from Nunki itself. We provide:
              <ul>
                <li>
                  • <strong>Innovative FinTech Insurance</strong> that safeguards
                  your tomorrow, today.
                </li>
                <li>
                  • <strong>Value-Added Products</strong> that enhance your
                  financial well-being and daily life.
                </li>
                <li>
                  • <strong>Tailored Services</strong> designed to meet the unique
                  needs of each community we serve.
                </li>
              </ul>
            </p>
          </div>
          <div className={template.aboutUsText}>
            <h2>Our Reach: Beyond Borders</h2>
            <p>
              While our roots are firmly planted in South Africa, our branches
              extend across the continent. Nunki Africa is committed to
              empowering communities in various African countries, harnessing the
              power of technology to break down barriers and build bridges to
              financial inclusion.
            </p>
          </div>
          <div className={template.aboutUsText}>
            <h2>Our Commitment: To You, Our Clients</h2>
            <p>
              You, our clients, are the stars in our universe. Your aspirations
              fuel our mission, your challenges forge our innovations, and your
              trust shapes our journey. Together, we navigate the financial
              cosmos, driven by the same enduring light that has guided
              travelers for millennia—the steadfast glow of Nunki.
            </p>
          </div>
          <div className={template.aboutUsText}>
            <h2>Join Us: Embark on a Journey to Financial Enlightenment</h2>
            <p>
              Embark with us on this journey to financial enlightenment. Let
              Nunki Africa be your guide to a future as bright as the star that
              inspires us. Together, we will chart a course to success,
              prosperity, and a world of possibilities.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutUs;