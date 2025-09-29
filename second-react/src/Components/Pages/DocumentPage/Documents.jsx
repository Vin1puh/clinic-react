import './Document.css'
import {documentData2, referenceData2} from "../../../data/data.js";
import Blanks from "../../Elements/Blanks/Blanks.jsx";
import References from "../../Elements/References/References.jsx";
import diplom1 from '../../../assets/diplom1.png'
import diplom2 from '../../../assets/diplom2.png'
import diplom3 from '../../../assets/diplom3.png'

export default function Documents() {
    return (
        <main>
            <div className="space"></div>
            <section className="sectionBlockName">
                <div className="left_block">
                    <div className="left_block__space">
                        <h1>ДОКУМЕНТЫ Для врачей</h1>
                    </div>
                </div>
                <div className="right_block"></div>
            </section>
            <div className="space"></div>
            <section className="sectionFor">
                <div className="blanks">
                    {referenceData2.map((item, index) => (
                        <References key={index} {...item} />
                    ))}
                </div>
            </section>
            <div className="space"></div>
            <section className="sectionFor">
                <div className="blanks">
                    {documentData2.map((item, index) => (
                        <Blanks key={index} {...item} />
                    ))}
                </div>
            </section>
            <div className="absolute_vodka2"></div>
            <div className="space"></div>
            <section className="sectionFor">
                <div className="top">
                    <h1>ЛИЦЕНЗИЯ <p>на осуществление образовательной деятельности</p></h1>
                </div>
                <div className="space"></div>
                <div className="blanks">
                    <img src={diplom1} alt=""/>
                    <img src={diplom2} alt=""/>
                    <img src={diplom3} alt=""/>
                </div>
            </section>
            <div className="space"></div>
        </main>
    )
}