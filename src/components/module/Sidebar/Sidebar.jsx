import { Link } from 'react-router-dom';
import './Sidebar.css';
import { MdDashboard } from "react-icons/md";
import { FaList ,FaPlus ,FaRegEdit   } from "react-icons/fa";
import { ImExit } from "react-icons/im";


function Sidebar() {
  return (
    <section className="sidebar">
        <div className="sidebar_wrapper">
            <Link to='' className="sidebar_profile">
                <img src="/assets/images/pic1.jpg" alt="" className="sidebar_profile_img" />
                <span className="sidebar_profile_name">جابیک</span>
            </Link>
            <ul className="sidebar_items">
                <li className="sidebar_item">
                    <Link to='' className='sidebar_item_link'>
                    <span className="sidebar_item_icon"><MdDashboard/></span>
                    <span className="sidebar_item_text">داشبورد</span>
                    </Link>
                </li>
                <li className="sidebar_item">
                   <Link to='' className='sidebar_item_link'>
                   <span className="sidebar_item_icon"><FaList/></span>
                   <span className="sidebar_item_text">لیست شغل</span>
                   </Link>
                </li>
                <li className="sidebar_item">
                    <Link to='' className='sidebar_item_link'>
                    <span className="sidebar_item_icon"><FaPlus/></span>
                    <span className="sidebar_item_text">افزودن شغل</span>
                    </Link>
                </li>
                <li className="sidebar_item">
                    <Link to='' className='sidebar_item_link'> 
                    <span className="sidebar_item_icon"><FaRegEdit/></span>
                    <span className="sidebar_item_text">ویرایش پروفایل</span>
                    </Link>
                </li>
                <li className="sidebar_item">
                    <button className="sidebar_item_btnExit">
                    <span className="sidebar_item_icon"><ImExit/></span>
                    <span className="sidebar_item_text">خروج</span>
                    </button>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Sidebar