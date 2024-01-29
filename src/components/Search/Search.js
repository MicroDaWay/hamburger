import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Search.module.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className={classes.search}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={classes['search-icon']} />
      <input className={classes['search-input']} type="text" placeholder="请输入关键字" />
    </div>
  )
}

export default Search