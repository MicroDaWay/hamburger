import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import Backdrop from '../Backdrop/Backdrop'
import MealItem from '../MealItem/MealItem'
import classes from './CartDetails.module.css'

const CartDetails = () => {
  const cartContext = useContext(CartContext)
  const mealItem = cartContext.cart.map((item) => (
    <MealItem haveDesc={false} item={item} key={item.id} />
  ))

  return (
    <Backdrop>
      <div onClick={(e) => e.stopPropagation()} className={classes['cart-details']}>
        <div className={classes.top}>
          <span className={classes['top-text']}>餐品详情</span>
          <div className={classes['clear-box']}>
            <FontAwesomeIcon icon={faTrash} />
            <span className={classes['clear-text']}>清空购物车</span>
          </div>
        </div>
        <div className={classes.meal}>{mealItem}</div>
      </div>
    </Backdrop>
  )
}

export default CartDetails
