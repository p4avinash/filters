import React, { useState } from "react"
var FA = require("react-fontawesome")

function Product({ category, description, id, image, price, rating, title }) {
  const [isDescriptionOn, setIsDescriptionOn] = useState(false)

  const handleDescription = () => {
    setIsDescriptionOn(!isDescriptionOn)
  }

  return (
    <div className='product-container'>
      <div className='image'>
        <img src={image} alt='product' />
      </div>
      <p className='product-title'>{title}</p>
      <div className='price-rating'>
        <p className='rating'>{rating.rate} ⭐</p>
        <p className='price'>{price} $</p>
      </div>
      {isDescriptionOn && (
        <div className='product-description'>{description}</div>
      )}
      <div className='btn-container'>
        {isDescriptionOn ? (
          <FA
            name='chevron-up'
            className='btn'
            onClick={() => handleDescription()}
          />
        ) : (
          <FA
            name='chevron-down'
            className='btn'
            onClick={() => handleDescription()}
          />
        )}
      </div>
    </div>
  )
}

export default Product
