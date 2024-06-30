import Navbar from "./components/module/Navbar/Navbar"
import Sidebar from "./components/module/Sidebar/Sidebar"

function App() {
  return (
    <>
    <div className="app_Wrapper">
      <div className="app_navbar">
         <Navbar/>
      </div>
      <div className="app_side">
          <Sidebar/>
      </div>
    </div>
    </>
  )
}

export default App