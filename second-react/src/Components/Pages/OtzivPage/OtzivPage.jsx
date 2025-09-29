import './OtzivPage.css'
import {otzivData} from "../../../data/data.js";
import Otziv from "../../Elements/Otziv/Otziv.jsx";

export default function OtzivPage() {
    return (
        <main>
            <div className="space"></div>
            <div className="OtzivHead">
                <div className="left">
                    <div className="left__cont">
                        <h1>Отзывы</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="right__cont">
                        <button className='loadMore'>Оставить отзыв</button>
                    </div>
                </div>
            </div>
            <div className="space"></div>
            <section className="sectionOfOtziv">
                {otzivData.map((item, index) => (
                    <Otziv key={index} {...item}/>
                ))}
            </section>
            <div className="space"></div>
            <button className='loadMore'>Загрузить еще</button>
            <div className="space"></div>
        </main>
    )
}