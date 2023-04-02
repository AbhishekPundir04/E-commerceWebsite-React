import { Fragment } from "react";
import classes from './Home.module.css';

const Home = () => {
  return (
    <Fragment>
      <div className={classes.div}></div>
      <h2 className={classes.h2}>Tours</h2>

      <section>
        <div className={classes.para}>
          <p>
           Sep 14 MUMBAI. TRAP ALBUM{" "}
            <button className={classes.button1}>BUY TICKETS</button>{" "}
          </p>
          <hr className={classes.hr} />
          <p>
          Aug 11 Delhi. No CAP ALBUM <button className={classes.button1}>BUY TICKETS</button>
          </p>
          <hr className={classes.hr} />
          <p>
           Jan 12 MYP ALBUM, DUN <button className={classes.button1}>BUY TICKETS</button>
          </p>
          <hr className={classes.hr} />
          <p>
             Feb 10 NEW ALBUM,PB <button className={classes.button1}>BUY TICKETS</button>
          </p>
          <hr className={classes.hr} />
          <p>
           Nov 12 GOOGLE PAY, DUN <button className={classes.button1}>BUY TICKETS</button>
          </p>
          
        </div>
      </section>
    </Fragment>
  );
};

export default Home;