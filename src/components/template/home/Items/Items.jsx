import './Items.css'

function Items() {
  return (
    <section className="items">
        <div className="items_wrapper">
            <div className="item">
                <div className="item_content">
                    <span className="item_number">342</span>
                    <span className="item_text">برنامه مصاحبه</span>
                </div>
                <span className="item_percent">0.5 % </span>
            </div>
            <div className="item">
                <div className="item_content">
                    <span className="item_number">984</span>
                    <span className="item_text">اپلیکیشن ارسال شد</span>
                </div>
                <span className="item_percent">0.5 %</span>
            </div>
        </div>
        <div className="items_wrapper">
            <div className="item">
                <div className="item_content">
                    <span className="item_number">1.547k</span>
                    <span className="item_text">نمایه مشاهده شده</span>
                </div>
                <span className="item_percent">0.5 %</span>
            </div>
            <div className="item">
                <div className="item_content">
                    <span className="item_number">437</span>
                    <span className="item_text">پیام خوانده شد</span>
                </div>
                <span className="item_percent">0.5 %</span>
            </div>
        </div>
    </section>
  )
}

export default Items