import classes from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
      <h2 className={classes.title}>About Us</h2>
      <p className={classes.description}>
        We are a company dedicated to providing high-quality products and services to our customers. Our team is made up of experienced professionals who are passionate about what they do and are committed to delivering exceptional results.
      </p>
      <p className={classes.description}>
        Our mission is to exceed our customers' expectations by offering innovative solutions and exceptional service. We believe in building long-term relationships with our customers and strive to provide the best possible experience for each and every one.
      </p>
      <p className={classes.description}>
        Thank you for considering us for your needs. We look forward to working with you.
      </p>
    </div>
  );
};

export default AboutUs;
