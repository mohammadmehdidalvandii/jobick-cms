import './AddJob.css';

function AddJob({handlerClose}) {
  return (
    <div className="addJob">
    <h4 className="addJob_title">افزودن شغل</h4>
    <div className="addJob_wrapper">
    <div className="addJobBox">
        <span className="addJobBox_text">نام شرکت</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    <div className="addJobBox">
        <span className="addJobBox_text">موقعیت شغلی</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    </div>
    <div className="addJob_wrapper">
    <div className="addJobBox">
        <span className="addJobBox_text"> سابقه کار</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    <div className="addJobBox">
        <span className="addJobBox_text">حقوق</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    </div>
    <div className="addJob_wrapper">
    <div className="addJobBox">
        <span className="addJobBox_text">استان</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    <div className="addJobBox">
        <span className="addJobBox_text">شهر</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    </div>
    <div className="addJob_wrapper">
    <div className="addJobBox">
        <span className="addJobBox_text">مقطع تحصیلی</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    <div className="addJobBox">
        <span className="addJobBox_text">نوع شرکت</span>
        <input type="text" className='addJobBox_input'/>
    </div>
    </div>
    <div className="addJobBox">
        <span className="addJobBox_text">توضیحات</span>
        <input type="text" className='addJobBox_inputText'/>
    </div>
    <div className="addJob_Buttons">
    <button className="addJob_Btn">ذخیره</button>
    <button className="addJob_Btn" onClick={handlerClose}>بستن</button>
    </div>
</div>
  )
}

export default AddJob