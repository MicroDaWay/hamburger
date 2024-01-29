import MealItem from '../MealItem/MealItem'
import classes from './Meal.module.css'

const Meal = (props) => {
  const mealsItem = props.mealsData.map((item) => <MealItem item={item} key={item.id} />)

  return <div className={classes.meal}>{mealsItem}</div>
}

export default Meal
