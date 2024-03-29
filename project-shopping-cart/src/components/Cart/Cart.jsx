import React from 'react'

const Cart = ({ cartLength }) => {
  return (
    <div>
        {cartLength.map((item) => (
            <div key={item.id}>{item.id}</div>
        ))}
    </div>
  )
}

export default Cart