import { useState } from 'react'
import Meal from './components/Meal/Meal'
import Search from './components/Search/Search'
import A from './components/Test/A'
import B from './components/Test/B'
import TestContext from './store/TestContext'

// 商品数据
const MEAL_DATA = [
  {
    id: '1',
    title: '汉堡包',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 12,
    img: '/img/meals/1.png',
  },
  {
    id: '2',
    title: '双层吉士汉堡',
    desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
    price: 20,
    img: '/img/meals/2.png',
  },
  {
    id: '3',
    title: '巨无霸',
    desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
    price: 24,
    img: '/img/meals/3.png',
  },
  {
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
    price: 21,
    img: '/img/meals/4.png',
  },
  {
    id: '5',
    title: '板烧鸡腿堡',
    desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
    price: 22,
    img: '/img/meals/5.png',
  },
  {
    id: '6',
    title: '麦香鸡',
    desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
    price: 14,
    img: '/img/meals/6.png',
  },
  {
    id: '7',
    title: '吉士汉堡包',
    desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
    price: 12,
    img: '/img/meals/7.png',
  },
]

const App = () => {
  // 商品数据
  const [mealData, setMealData] = useState(MEAL_DATA)

  // 购物车数据
  const [cartData, setCartData] = useState({
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
  })

  // 向购物车中添加商品
  const addCart = (newItem) => {
    const newCart = { ...cartData }
    const item = newCart.cart.find((item) => item.id === newItem.id)
    if (!item) {
      newItem.amount = 0
      newCart.cart.push(newItem)
    }
    newItem.amount++
    newCart.totalAmount += 1
    newCart.totalPrice += newItem.price
    setCartData(newCart)
  }

  // 从购物车中移除商品
  const subCart = (newItem) => {
    const newCart = { ...cartData }
    newItem.amount--
    if (newItem.amount <= 0) {
      newCart.cart = newCart.cart.filter((item) => item.id !== newItem.id)
    }
    newCart.totalAmount -= 1
    newCart.totalPrice -= newItem.price
    setCartData(newCart)
  }

  return (
    <>
      <TestContext.Provider value={{ name: '猪八戒', age: 28 }}>
        <A />
      </TestContext.Provider>
      {/* <TestContext.Provider value={{ name: '沙和尚', age: 38 }}> */}
      <B />
      {/* </TestContext.Provider> */}
      <Search />
      <Meal mealData={mealData} onAddCart={addCart} onSubCart={subCart} />
    </>
  )
}

export default App
