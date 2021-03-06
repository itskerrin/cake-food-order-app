import React from 'react';

const BasketContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id) => {},
});

export default BasketContext;
