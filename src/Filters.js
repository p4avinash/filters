import React, { useEffect, useState } from "react"
import PriceRangeFilter from "./PriceRangeFilter"
import CategoryFilter from "./CategoryFilter"

function Filters() {
  return (
    <>
      <div className='filter-container'>
        <PriceRangeFilter />
        <CategoryFilter />
      </div>
    </>
  )
}

export default Filters
