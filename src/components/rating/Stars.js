import './Stars.css'
import React from 'react'

export default function Stars({ rating, reviews }) {
  // total number of stars
  const starTotal = 5
  rating = rating ? rating : (Math.random() * (5 - 1)).toPrecision(2)
  const starPercentage = (rating / starTotal) * 100
  return (
    <div className='d-flex'>
      <div className='stars-outer'>
        <div
          className='stars-inner'
          style={{ width: `${Math.round(starPercentage / 10) * 10}%` }}
        />
      </div>
      <span className='total_reviews'>
        ({reviews ? reviews : Math.floor(Math.random() * (10 + 1)) + 1})
      </span>
    </div>
  )
}
