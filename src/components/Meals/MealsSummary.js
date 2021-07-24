import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Cakes cakes cakes</h2>
      <p>
        We sell a grand total of three cakes! Take your pick, try a few, or try
        them all... Add your selection to the basket, make your final
        adjustments and view your total.
      </p>
      <p>
        This app was made with React using React hooks, portal and css modules.
        Please feel free to view the source code on github to have a closer look
        of how it came together.
      </p>
    </section>
  );
};

export default MealsSummary;
