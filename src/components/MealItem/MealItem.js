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
        {props.haveDesc ? <div className={classes.desc}>{props.item.desc}</div> : null}
        {props.checkout ? (
          <div
            className={
              props.haveDesc ? classes['price-count'] : `${classes['price-count']} ${classes.top}`
            }
          >
            <Counter item={props.item} />
            <span className={classes.price}>{props.item.price * props.item.amount}</span>
          </div>
        ) : (
          <div
            className={
              props.haveDesc ? classes['price-count'] : `${classes['price-count']} ${classes.top}`
            }
          >
            <span className={classes.price}>{props.item.price}</span>
            <Counter item={props.item} />
          </div>
        )}
      </div>
    </div>
  )
}

export default MealItem
