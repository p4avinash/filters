import React, { useContext, useState, useEffect } from "react"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [productsReserved, setProductsReserved] = useState([])
  const [priceFiltered, setPriceFiltered] = useState(1000)
  const [categories, setCategories] = useState([])
  const [categoryFiltered, setCategoryFiltered] = useState([])

  useEffect(() => {
    setProducts(productsReserved)
    const filterdProducts = productsReserved.filter(
      (item) => item.price <= priceFiltered
      )
    setProducts(filterdProducts)
  }, [priceFiltered])


  const clearFilters = () => {
    setProducts(productsReserved)
  }


  useEffect(()=>{
    setProducts(productsReserved)
    const filteredProducts = productsReserved.filter(item => item.category === categoryFiltered)
    setProducts(filteredProducts)
  }, [categoryFiltered])


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((productItems) => {
        setProducts(...products, productItems)
        setProductsReserved(...products, productItems)
        const categoriesCollection = [] 
        productItems.map(item => {
          if(!categoriesCollection.includes(item.category)){
            categoriesCollection.push(item.category)
          }
        })
        setCategories(categoriesCollection)
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
        categories,
        setCategoryFiltered,
        setProducts,
        productsReserved,
        clearFilters
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
