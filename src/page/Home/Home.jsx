import Items from "../../components/template/home/Items/Items"
import Profiles from "../../components/template/home/Profiles/Profiles"

function Home() {
  return (
    <>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
             <div className="box_wrapper">  
                  <Items/>
              </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="box_wrapper">
                <Profiles/>
              </div>
          </div>
       </div>
    </>
  )
}

export default Home