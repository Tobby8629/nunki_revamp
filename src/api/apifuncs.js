import { Alert } from "../constants";

export const handleSubscribe = async (email, data, mutate, queryClient, setEmail) => {
    if (!email) {
      Alert('error','Empty Email','Please enter your email address before subscribing.', '#f4f4f4')
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert('error', 'invalid Email', "Please enter a valid email address.")
      return;
    }
  
    try {
      const isSubscribed = data?.some((e) => e.email === email);
      if (isSubscribed) {
        Alert('error','Already Subscribed','You have already subscribed with this email address.');
        return;
      }
  
      mutate({
          method: "post",
          endpoint: "subscribers",
          params: { email, subscription_date: new Date().toISOString()}
        },
        {
          onSuccess: (response) => {
            queryClient.invalidateQueries(['getEmails']); 
            response && setEmail('');
            Alert('success','Subscription Successful!','Thank you for subscribing.');
          }
        }
      );
  
    } catch (error) {
      console.error(error);
    }
};