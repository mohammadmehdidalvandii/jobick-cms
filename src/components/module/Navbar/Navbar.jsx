import './Navbar.css';
import { FaSearch , FaPlus } from "react-icons/fa";

function Navbar() {
  return (
    <section className="navbar">
        <div className="navbar_wrapper">
            <div className="navbar_item">
                <div className="navbar_logo">
                    <h2 className="navbar_logo_title">jobick</h2>
                    <span className="navbar_logo_text">داشبورد کاریابی</span>
                </div>
            </div>
            <div className="navbar_item">
                <div className="navbar_searchBox">
                    <input type="text" className='navbar_searchBox_input' placeholder='جستجو...' />
                    <span className="navbar_searchBox_icon">
                        <FaSearch/>
                    </span>
                </div>
                <div className="navbar_addJob">
                    <span className="navbar_addJob_icon">
                        <FaPlus/>
                    </span>
                </div>
            </div>
            <div className="navbar_item">this is item</div>
        </div>
    </section>
  )
}

export default Navbar