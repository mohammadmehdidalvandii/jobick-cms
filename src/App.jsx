import Navbar from "./components/module/Navbar/Navbar"

function App() {
  return (
    <>
    <div className="app_Wrapper">
      <div className="app_navbar">
         <Navbar/>
      </div>
      <div className="app_side">
          sidebar
      </div>
    </div>
    </>
  )
}

export default App