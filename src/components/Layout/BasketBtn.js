import BasketIcon from '../Basket/BasketIcon';
import classes from './BasketBtn.module.css';
import { useContext } from 'react';
import BasketContext from '../../store/basket-context';

const BasketBtn = (props) => {
  const basketCtx = useContext(BasketContext);

  const numberOfItems = basketCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <BasketIcon />
      </span>
      <span>Basket</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default BasketBtn;
