import MealItem from '../MealItem/MealItem'
import classes from './Meal.module.css'

const Meal = (props) => {
  const mealItem = props.mealData.map((item) => <MealItem item={item} key={item.id} />)

  return <div className={classes.meal}>{mealItem}</div>
}

export default Meal
