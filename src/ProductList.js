import React from "react"
import Product from "./Product"
import { useGlobalContext } from "./Context"

function ProductList() {
  const { products } = useGlobalContext()

  return (
    <>
      <div className='product-list-container'>
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default ProductList
