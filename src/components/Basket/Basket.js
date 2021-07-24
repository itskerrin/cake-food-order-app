import { useContext } from 'react';
import BasketContext from '../../store/basket-context';
import BasketItem from './BasketItem';
import Modal from '../UI/Modal';
import classes from './Basket.module.css';

const Basket = (props) => {
  const basketCtx = useContext(BasketContext);

  const totalAmount = `£${basketCtx.totalAmount.toFixed(2)}`;
  const hasItems = basketCtx.items.length > 0;

  const basketItemRemoveHandler = (id) => {
    basketCtx.removeItem(id);
  };

  const basketItemAddHandler = (item) => {
    basketCtx.addItem({ ...item, amount: 1 });
  };

  const basketContents = (
    <ul className={classes['cart-items']}>
      {basketCtx.items.map((item) => (
        <BasketItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={basketItemRemoveHandler.bind(
            null,
            item.id
          )} /* bind ensures id is passed */
          onAdd={basketItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {basketContents}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Basket;
