import Counter from '../Counter/Counter'
import classes from './MealItem.module.css'

const MealItem = () => {
  return (
    <div className={classes['meal-item']}>
      <div className={classes['img-box']}>
        <img src="img/meals/1.png" alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes['meal-name']}>汉堡包</div>
        <div className={classes.desc}>
          百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！
        </div>
        <div className={classes['price-count']}>
          <span className={classes.price}>12</span>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default MealItem
