import { Outlet } from "react-router-dom"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import LoaderSpinner from "./component/LoaderSpinner/LoaderSpinner"

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
