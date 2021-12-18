import React, { useEffect, useState } from "react"
import { useGlobalContext } from "./Context"

function PriceRangeFilter() {
  const [priceRange, setPriceRange] = useState(1000)

  const { setPriceFiltered } = useGlobalContext()

  useEffect(() => {
    setPriceFiltered(priceRange)
  }, [priceRange])

  return (
    <div className=''>
      <div>
        <hr />
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
        <hr />
      </div>
    </div>
  )
}

export default PriceRangeFilter
