import { useNavigate } from 'react-router-dom'
import { closed } from './funcs'


const ClientOptions = (props) => {

  const services = [
    {id: 1, name: "Nunki Difference", route: "/differences"},
    {id: 2, name: "About Us", route: "/about"},
    {id: 3, name: "Nunki Products", route: "/prices"},
    {id: 4, name: "Terms & Conditions", route: "/"},
    {id: 5, name: "Blogs", route:"/blogs"},
  ]
  const func = props
  const navigate = useNavigate()
  return (
    <div className='start-btn-wrapper'>
      {services.map((service) => (
        <div key={service.id} className='bot-btn'>
          {service.name === "Nunki Products" ? (
            <button className='start-btn' onClick={() => func.actions.product_details()}>
              {service?.name}
            </button>
          ) : (
            <button className='start-btn' onClick={() => closed(func, navigate, service?.route)}>
              {service?.name}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default ClientOptions


