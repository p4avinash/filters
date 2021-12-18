import React from "react"
import {useGlobalContext} from './Context'

function CategoryFilter() {
  const {categories, setCategoryFiltered } = useGlobalContext()
  
  const filterByCategory = (e) => {
    let category = e.target.textContent
    setCategoryFiltered(category)
  }

  return (
    <div className=''>
      <p className='filter-title'>Category</p>
      <div className='category-btn-container'>
      {
        categories.map(item => {
          return <button onClick={filterByCategory} className='category-btn'>{item}</button>
        })
      }
      </div>
      <hr />
    </div>
  )
}

export default CategoryFilter
