import { useQuery } from "@tanstack/react-query"
// import { useState } from "react"
import apiRequest from "./apiRequest"

const UseQuery = ({query,method,endpoint,params }) => {
  // const [data, setData] = useState(null)
  const {data, isLoading, error} = useQuery({
    queryKey:[query],
    queryFn: () => apiRequest(
      method,
      endpoint,
      params
     ),
     enabled: true
  })


    
  return {
    data,
    isLoading,
    error
  }
}

export default UseQuery
