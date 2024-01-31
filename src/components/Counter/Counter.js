import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Counter.module.css'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

const Counter = (props) => {
  const cartContext = useContext(CartContext)

  // 点击增加的处理函数
  const addHandler = () => {
    cartContext.cartDispatch({
      type: 'ADD_CART',
      newItem: props.item,
    })
  }

  // 点击减少的处理函数
  const subHandler = () => {
    cartContext.cartDispatch({
      type: 'SUB_CART',
      newItem: props.item,
    })
  }

  return (
    <div className={classes.counter}>
      {props.item.amount ? (
        <>
          <button className={classes.sub} onClick={subHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{props.item.amount}</span>
        </>
      ) : null}
      <button onClick={addHandler} className={classes.add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default Counter
