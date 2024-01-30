import classes from './BottomBar.module.css'
import Bag from '../../assets/bag.png'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

const BottomBar = () => {
  const cartContext = useContext(CartContext)

  return (
    <div className={classes['bottom-bar']}>
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
      <div className={cartContext.totalPrice ? classes['checkout'] : classes['no-checkout']}>
        去结算
      </div>
    </div>
  )
}

export default BottomBar
