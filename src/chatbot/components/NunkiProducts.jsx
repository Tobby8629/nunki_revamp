import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { closed } from './funcs'



const NunkiProducts = (props) => {
  const products = [
    {id: 1, name: "Shack Insurance", route: "/products/shack/insure"},
    {id: 2, name: "Teacher Online", route: "/products/teacher_online/insure"},
    {id: 3, name: "Medical Advice", route: "/products/medical_advice/insure"},
    {id: 4, name: "Emergency Medical Service", route: "/products/healthcare/insure"},
    {id: 5, name: "Trauma Counselling", route:"/"},
    {id: 6, name: "Trauma, Assualt & HIV Support", route:"/"},
    {id: 7, name: "Funeral", route:"/products/mortal_remains/insure"},
    {id: 8, name: "Discounted Funeral", route:"/"},
    {id: 9, name: "Tele Medicine", route:"/"},
    {id: 10, name: "Group Personal Accident", route:"/"},
    {id: 11, name: "Home", route:"/"},
    {id: 12, name: "Home & Contents", route:"/"},
    {id: 13, name: "Health Insurance", route:"/"},
    {id: 14, name: "Merchant", route:"/"},
  ]
  const func = props
  const navigate = useNavigate()
  return (
    <div className='start-btn-wrapper'>
      {products.map((product)=>(
        <div key={product.id} className="bot-btn">
          <button className='start-btn' onClick={()=> closed(func, navigate, product.route)}> {product.name}</button>
        </div>  
      ))}
    </div>
  )
}

export default NunkiProducts




