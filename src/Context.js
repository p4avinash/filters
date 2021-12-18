import React, { useContext, useState, useEffect } from "react"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [productsReserved, setProductsReserved] = useState([])
  const [priceFiltered, setPriceFiltered] = useState(1000)

  useEffect(() => {
    setProducts(productsReserved)
    const filterdProducts = productsReserved.filter(
      (item) => item.price <= priceFiltered
    )
    setProducts(filterdProducts)
  }, [priceFiltered])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((productItems) => {
        setProducts(...products, productItems)
        setProductsReserved(...products, productItems)
      })
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false)
    }
  }, [products])

  return (
    <AppContext.Provider
      value={{
        products,
        isLoading,
        setPriceFiltered,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
