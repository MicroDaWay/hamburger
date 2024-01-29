import { useContext } from 'react'
import TestContext from '../../store/TestContext'

const B = () => {
  const testCtx = useContext(TestContext)
  console.log(testCtx)

  return (
    <div>
      {testCtx.name} {testCtx.age}
    </div>
  )
}

export default B
