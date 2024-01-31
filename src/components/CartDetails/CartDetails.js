import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import CartContext from '../../store/CartContext'
import Backdrop from '../Backdrop/Backdrop'
import ConfirmModal from '../ConfirmModal/ConfirmModal'
import MealItem from '../MealItem/MealItem'
import classes from './CartDetails.module.css'

const CartDetails = (props) => {
  // 控制是否显示清空购物车的确认框
  const [showConfirmModal, setConfirmModal] = useState(false)

  const cartContext = useContext(CartContext)

  const mealItem = cartContext.cart.map((item) => (
    <MealItem checkout={false} haveDesc={false} item={item} key={item.id} />
  ))

  // 点击取消的处理逻辑
  const cancelHandler = () => {
    setConfirmModal(false)
  }

  // 点击确认的处理逻辑
  const confirmHandler = () => {
    cartContext.clearCart()
    setConfirmModal(false)
    props.onHideCartDetails()
  }

  // 点击清空购物车按钮的处理函数
  const clearCartHandler = () => {
    setConfirmModal(true)
  }

  return (
    <Backdrop>
      <div onClick={(e) => e.stopPropagation()} className={classes['cart-details']}>
        <div className={classes.top}>
          <span className={classes['top-text']}>餐品详情</span>
          <div className={classes['clear-box']} onClick={clearCartHandler}>
            <FontAwesomeIcon icon={faTrash} />
            <span className={classes['clear-text']}>清空购物车</span>
          </div>
        </div>
        <div className={classes.meal}>{mealItem}</div>
        {showConfirmModal ? (
          <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />
        ) : null}
      </div>
    </Backdrop>
  )
}

export default CartDetails
