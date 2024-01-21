import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route, } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import Error from "./pages/Error"
import ProtectedRoute from "./components/ProtectedRoute"



const router = createBrowserRouter(createRoutesFromElements(
  <Route>
   <Route index element={<Home />}/>
   <Route path="/success" element={<ProtectedRoute children={<Success />} />}/>
   <Route path="*" element={<Error />}/>
  </Route>
))



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App