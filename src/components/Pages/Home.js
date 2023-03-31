import { Fragment } from "react";
import styles from './Home.module.css';

const Home = () => {
  return (
    <Fragment>
      <div className={styles.div}></div>
      <h2 className={styles.h2}>Tours</h2>

      <section>
        <div className={styles.para}>
          <p>
            JUL16 MUMBAI.SUN TOE ALBUM{" "}
            <button className={styles.button1}>BUY TICKETS</button>{" "}
          </p>
          <hr className={styles.hr} />
          <p>
            TAJ ALBUM,MUMBAI <button className={styles.button1}>BUY TICKETS</button>
          </p>
          <hr className={styles.hr} />
          <p>
            ROZ ALBUM,PUNE <button className={styles.button1}>BUY TICKETS</button>
          </p>
          <hr className={styles.hr} />
          <p>
            MIMMI ALBUM,MUMBAI <button className={styles.button1}>BUY TICKETS</button>
          </p>
          <hr className={styles.hr} />
          <p>
            LIGGI ALBUM,MUMBAI <button className={styles.button1}>BUY TICKETS</button>
          </p>
          <hr className={styles.hr} />
          <p>
            ROSHNI ALBUM,MUMBAI <button className={styles.button1}>BUY TICKETS</button>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
