import { Link } from 'react-router-dom'
import './Profiles.css'

function Profiles() {
  return (
    <section className="profile">
        <div className="profile_wrapper">
            <div className="profile_user">
                <img src="/assets/images/pic1.jpg" alt="profile-image" className="profile_image" />
                <div className="profile_content">
                    <span className="profile_username">فرانکلین</span>
                    <span className="profile_jobName">فرانت</span>
                    <span className="profile_city">تگزاس امریکا</span>
                </div>
            </div>
            <Link to='' className='profile_link_edit'>به روز رسانی پروفایل</Link>
        </div>
        <div className="profile_wrapper">
            <div className="profile_skills">
                <h5 className="profile_skill_title">مهارت ها</h5>
                <div className="profile_skill">
                    <div className="profile_skill_progress">
                        <span className="skill_progress_bg"></span>
                        <span className="skill_progress"></span>
                    </div>
                    <span className="skill_progress_name">فیگما</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profiles