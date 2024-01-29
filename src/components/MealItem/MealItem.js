import Counter from '../Counter/Counter'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  return (
    <div className={classes['meal-item']}>
      <div className={classes['img-box']}>
        <img src={props.item.img} alt={props.item.title} />
      </div>
      <div className={classes.details}>
        <div className={classes['meal-name']}>{props.item.title}</div>
        <div className={classes.desc}>{props.item.desc}</div>
        <div className={classes['price-count']}>
          <span className={classes.price}>{props.item.price}</span>
          <Counter item={props.item} onAddCart={props.onAddCart} onSubCart={props.onSubCart} />
        </div>
      </div>
    </div>
  )
}

export default MealItem
