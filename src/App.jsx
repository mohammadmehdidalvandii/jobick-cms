import { useRoutes } from "react-router-dom";
import Navbar from "./components/module/Navbar/Navbar"
import Sidebar from "./components/module/Sidebar/Sidebar"
import routes from './routes';



function App() {
  const router = useRoutes(routes)
  return (
    <>
      <div className="app_navbar">
         <Navbar/>
      </div>
    <div className="app_Wrapper">
      <div className="app_side">
          <Sidebar/>
      </div>
      <div className="app_site">
      {router}
      </div>
    </div>
    </>
  )
}

export default App