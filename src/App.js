import React from "react"
import Shop from "./Shop"
import Filters from "./Filters"
import "tachyons"

function App() {
  return (
    <div className='shop-container'>
      <Filters />
      <Shop />
    </div>
  )
}

export default App
