import { Fragment } from 'react';
import banner from '../../assets/cake-banner.jpg';
import classes from './Header.module.css';
import BasketBtn from './BasketBtn';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Bites</h1>
        <BasketBtn onClick={props.onShowBasket} />
      </header>
      <div className={classes['main-image']}>
        <img src={banner} alt="Cake table spread" />
      </div>
    </Fragment>
  );
};

export default Header;
