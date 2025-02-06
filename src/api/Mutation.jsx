import { useMutation } from "@tanstack/react-query";
import apiRequest from "./apiRequest";

const useCustomMutation = () => {
    return useMutation({
      mutationFn: ({ method, endpoint, params }) => apiRequest(method, endpoint, params),
    });
  };
  

export default useCustomMutation;
