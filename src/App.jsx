import './App.css'
import Nav from './component/Layout/Nav/Nav'
import 'react-chatbot-kit/build/main.css'
import { Routes, Route, useLocation, matchPath } from 'react-router-dom'
import Footer from './component/Layout/Footer/Footer'
import ChatBot from './chatbot/ChatBot/Index'
import Product from './component/products/Product'
import { pathsToHideFooter, products } from './assets/data'
import { routes } from './pages'
import ComingSoon from './component/comingSoon/ComingSoon'
import ScrollToTop from './component/utils/Scrollback'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {
  const queryClient = new QueryClient()
  const location = useLocation();
  const hideFooter = pathsToHideFooter.some(path => matchPath(path, location.pathname));
  // const FilteredProduct = products.filter((e)=> !e.name.includes("Tele Medicine"))


  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <ChatBot />
      <ScrollToTop />
      <Suspense  fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route path={route?.route} element={route?.element ? <route.element /> : <ComingSoon />} key={route?.route} />
          ))}
          {products.map((product) => (
            <Route key={product?.id} path={product?.link} element={product?.unavailable ? <ComingSoon /> : <Product product={product} benefitHeader={product.benefit_header}/>} />
          ))}
        </Routes>
      </Suspense>
      {!hideFooter && <Footer />}
    </QueryClientProvider>
  )
}

export default App
