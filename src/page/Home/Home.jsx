import Items from "../../components/template/home/Items/Items"

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
              </div>
          </div>
       </div>
    </>
  )
}

export default Home