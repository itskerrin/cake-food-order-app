import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import BasketContext from '../../../store/basket-context';

const MealItem = (props) => {
  const basketCtx = useContext(BasketContext);
  const price = `£${props.price.toFixed(2)}`;

  const addToBasketHandler = (amount) => {
    basketCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToBasket={addToBasketHandler} />
      </div>
    </li>
  );
};

export default MealItem;
