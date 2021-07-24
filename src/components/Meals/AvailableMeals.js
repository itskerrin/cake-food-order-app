import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Fruit Cake',
    description: 'A cake... with fruit!',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Peanut Butter Cake',
    description: 'Nutty and buttery',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Banana Cake',
    description: 'Like the fruit cake, but just bananas',
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      img={meal.img}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
