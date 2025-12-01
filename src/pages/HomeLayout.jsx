import { Outlet } from "react-router-dom"
import { Header,Navbar } from "../components/index"

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <div className="align-element">
        <Outlet />
      </div>
      
    </>
  )
}

export default HomeLayout
