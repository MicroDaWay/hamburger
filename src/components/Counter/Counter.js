import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Counter.module.css'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Counter = (props) => {
  // 点击增加的处理函数
  const addHandler = () => {
    props.onAddCart(props.item)
  }

  // 点击减少的处理函数
  const subHandler = () => {
    props.onSubCart(props.item)
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
