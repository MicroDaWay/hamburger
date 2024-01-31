import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Checkout.module.css'
import ReactDOM from 'react-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/CartContext'
import MealItem from '../MealItem/MealItem'
import { useContext } from 'react'

const checkoutRoot = document.getElementById('checkout-root')

const Checkout = (props) => {
  const cartContext = useContext(CartContext)

  const mealItem = cartContext.cart.map((item) => (
    <MealItem checkout={true} haveDesc={false} item={item} key={item.id} />
  ))

  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <div>
        <FontAwesomeIcon onClick={props.onHideCheckout} icon={faXmark} className={classes.close} />
      </div>
      <div className={classes.outer}>
        <div className={classes['top-text']}>餐品详情</div>
        <div className={classes.meal}>{mealItem}</div>
        <div className={classes['total-price-box']}>
          <span>合计￥</span>
          <span className={classes['total-price']}>{cartContext.totalPrice}</span>
        </div>
      </div>
      <div className={classes['bottom-bar']}>
        <div className={classes['total-price-container']}>
          <span>合计￥</span>
          <span className={classes['total-price']}>{cartContext.totalPrice}</span>
        </div>
        <div className={classes.pay}>去支付</div>
      </div>
    </div>,
    checkoutRoot
  )
}

export default Checkout
