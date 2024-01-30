import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Checkout.module.css'
import ReactDOM from 'react-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const checkoutRoot = document.getElementById('checkout-root')

const Checkout = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <div>
        <FontAwesomeIcon onClick={props.onHideCheckout} icon={faXmark} className={classes.close} />
      </div>
    </div>,
    checkoutRoot
  )
}

export default Checkout
