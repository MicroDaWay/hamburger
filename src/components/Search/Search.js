import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Search.module.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const Search = (props) => {
  const [keyword, setKeyword] = useState('')

  // input输入框输入的处理函数
  const inputHandler = (e) => {
    setKeyword(e.target.value.trim())
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [keyword])

  return (
    <div className={classes.search}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={classes['search-icon']} />
      <input
        value={keyword}
        onInput={inputHandler}
        className={classes['search-input']}
        type="text"
        placeholder="请输入关键字"
      />
    </div>
  )
}

export default Search
