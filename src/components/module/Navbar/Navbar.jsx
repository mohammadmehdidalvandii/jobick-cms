import './Navbar.css';
import { FaSearch , FaPlus , FaMoon  } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";


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
            <div className="navbar_item">
                <div className="navbar_item_wrapper">
                <div className="navbar_theme">
                    <span className="navbar_theme_icon">
                        <FaMoon/>
                    </span>
                </div>
                <div className="navbar_message">
                    <span className="navbar_message_icon">
                        <FaMessage/>
                    </span>
                </div>
                <div className="navbar_setting">
                    <span className="navbar_setting_icon">
                        <MdSettings/>
                    </span>
                </div>
                <div className="navbar_profile">
                    <img src="/assets/images/pic1.jpg" alt="profile image" className="navbar_profile_img" />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar