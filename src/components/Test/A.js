import TestContext from '../../store/TestContext'

const A = () => {
  return (
    <TestContext.Consumer>
      {(ctx) => {
        return (
          <div>
            {ctx.name} {ctx.age}
          </div>
        )
      }}
    </TestContext.Consumer>
  )
}

export default A
