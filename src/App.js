import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Basket from './components/Basket/Basket';
import BasketProvider from './store/BasketProvider';

function App() {
  const [showBasket, setShowBasket] = useState(false);

  const showBasketHandler = () => {
    setShowBasket(true);
  };

  const hideBasketHandler = () => {
    setShowBasket(false);
  };

  return (
    <BasketProvider>
      {showBasket && <Basket onClose={hideBasketHandler} />}
      <Header onShowBasket={showBasketHandler} />
      <main>
        <Meals />
      </main>
    </BasketProvider>
  );
}

export default App;
