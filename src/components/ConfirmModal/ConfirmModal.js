import Backdrop from '../Backdrop/Backdrop'
import classes from './ConfirmModal.module.css'

const ConfirmModal = (props) => {
  return (
    <Backdrop className={classes['confirm-outer']}>
      <div className={classes['confirm-modal']}>
        <div className={classes['confirm-text']}>确认是否清空购物车</div>
        <div className={classes['btn-box']}>
          <button className={classes.cancel} onClick={props.onCancel}>
            取消
          </button>
          <button className={classes.confirm} onClick={props.onConfirm}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  )
}

export default ConfirmModal
