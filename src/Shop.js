import React from "react"
import ProductList from "./ProductList"
import { useGlobalContext } from "./Context"

function Shop() {
  const { isLoading } = useGlobalContext()
  return <div>{isLoading ? <h1 className="loading-text">Loading...</h1> : <ProductList />}</div>
}

export default Shop
