import './Info.css'
import {documentData, referenceData} from "../../../data/data.js";
import Blanks from "../../Elements/Blanks/Blanks.jsx";
import References from "../../Elements/References/References.jsx";

export default function Info() {
    return (
        <main>
            <div className="space"></div>
            <section className="sectionBlockName">
                <div className="left_block">
                    <div className="left_block__space">
                        <h1>информация</h1>
                    </div>
                </div>
                <div className="right_block"></div>
            </section>
            <div className="space"></div>
            <section className="sectionFor">
                <div className="top">
                    <h1>Бланки, протоколы, рекомендации</h1>
                </div>
                <div className="space"></div>
                <div className="blanks">
                    {documentData.map((item, index) => (
                        <Blanks key={index} {...item} />
                    ))}
                </div>
            </section>
            <div className="space"></div>
            <section className="sectionFor">
                <div className="top">
                    <h1>Полезные ссылки</h1>
                </div>
                <div className="space"></div>
                <div className="blanks">
                    {referenceData.map((item, index) => (
                        <References key={index} {...item} />
                    ))}
                </div>
            </section>
            <div className="space"></div>
        </main>
    )
}