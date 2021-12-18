import React, { useEffect, useState } from "react"
import { useGlobalContext } from "./Context"

function PriceRangeFilter() {
  const [priceRange, setPriceRange] = useState(1000)

  const { setPriceFiltered } = useGlobalContext()

  useEffect(() => {
    setPriceFiltered(priceRange)
  }, [priceRange])

  return (
    <div className='filter-container'>
      <h2>Filters</h2>
      <div className='price-range-filter-container'>
        <p className='filter-title'>Price</p>
        <input
          type='range'
          min='0'
          max='1000'
          id='price-range-filter'
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <p className='price-range-filter-display'>{priceRange} $</p>
      </div>
    </div>
  )
}

export default PriceRangeFilter
