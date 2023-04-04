import { Outlet } from "react-router-dom"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      
      
    </div>
  )
}

export default App
