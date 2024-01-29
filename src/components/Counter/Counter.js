import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Counter.module.css'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Counter = () => {
  return (
    <div className={classes.counter}>
      <button className={classes.sub}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className={classes.count}>1</span>
      <button className={classes.add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default Counter
