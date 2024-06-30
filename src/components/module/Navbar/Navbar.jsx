import { useState } from 'react';
import './Navbar.css';
import { FaSearch , FaPlus , FaMoon , FaSun } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import AddJob from '../../template/navbar/AddJob/AddJob';


function Navbar() {
    const [addJob , setAddJob] = useState(false);
    const [isDarkMode , setIsDarkMode] = useState(false);

    const hanlderShowAddJob = ()=>{
        setAddJob(!addJob);
    }
    const handlerClose = ()=>{
        setAddJob(false);
    }
    window.addEventListener("keydown" ,(event)=>{
            if(event.key === 'Escape'){
                setAddJob(false);
            }
    })

    const toggleDarkMode =()=>{
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark_mode");
    }

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
                    <span className="navbar_addJob_icon" onClick={hanlderShowAddJob}>
                        <FaPlus/>
                    </span>
                    {addJob && ( <AddJob handlerClose={handlerClose}/>)}
                </div>
            </div>
            <div className="navbar_item">
                <div className="navbar_item_wrapper">
                <div className="navbar_theme">
                    <span className="navbar_theme_icon" onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <FaSun/>
                        ):(
                            <FaMoon/>
                        )}
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