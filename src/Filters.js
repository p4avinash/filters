import PriceRangeFilter from "./PriceRangeFilter"
import CategoryFilter from "./CategoryFilter"
import {useGlobalContext} from './Context'

function Filters() {

  const {clearFilters} = useGlobalContext()

  return (
    <>
      <div className='filter-container'>
      <h2>Filters</h2>
      <button onClick={clearFilters} className="clear-filter-btn">clear filters</button>
        <PriceRangeFilter />
        <CategoryFilter />
      </div>
    </>
  )
}

export default Filters
