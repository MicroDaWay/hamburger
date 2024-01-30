import classes from './BottomBar.module.css'
import Bag from '../../assets/bag.png'
import { useContext, useState } from 'react'
import CartContext from '../../store/CartContext'
import CartDetails from '../CartDetails/CartDetails'

const BottomBar = (props) => {
  // 是否显示购物车详情
  const [showCartDetails, setShowCartDetails] = useState(false)
  const cartContext = useContext(CartContext)

  // 是否显示购物车详情
  const clickBottomBar = () => {
    if (!cartContext.totalAmount) {
      setShowCartDetails(false)
      return
    }
    setShowCartDetails((prevState) => !prevState)
  }

  // 隐藏购物车详情
  const hideCartDetailsHandler = () => {
    setShowCartDetails(false)
  }

  // 点击去结算的处理函数
  const checkoutHandler = (e) => {
    e.stopPropagation()
    if (cartContext.totalAmount) {
      props.onShowCheckout()
    }
  }

  return (
    <div onClick={clickBottomBar} className={classes['bottom-bar']}>
      <div className={classes['bag-box']}>
        <img src={Bag} alt="bag" />
        {cartContext.totalAmount ? (
          <div className={classes['total-amount-box']}>{cartContext.totalAmount}</div>
        ) : null}
      </div>
      {cartContext.totalPrice ? (
        <div className={classes['total-price']}>{cartContext.totalPrice}</div>
      ) : (
        <div className={classes['no-meal']}>未选购商品</div>
      )}
      <div
        onClick={checkoutHandler}
        className={cartContext.totalPrice ? classes['checkout'] : classes['no-checkout']}
      >
        去结算
      </div>
      {showCartDetails ? <CartDetails onHideCartDetails={hideCartDetailsHandler} /> : null}
    </div>
  )
}

export default BottomBar
