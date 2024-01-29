import MealItem from '../MealItem/MealItem'
import classes from './Meal.module.css'

const Meal = () => {
  return (
    <div className={classes.meal}>
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
    </div>
  )
}

export default Meal
