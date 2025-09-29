import './Galery.css'
import galery1 from '../../../assets/galery1-1.png'
import galery2 from '../../../assets/galery1-2.png'
import galery3 from '../../../assets/galery1-3.png'
import galery4 from '../../../assets/galery1-4.png'
import galery5 from '../../../assets/galery1-5.png'
import galery6 from '../../../assets/galery1-6.png'
import galery7 from '../../../assets/galery1-7.png'
import galery8 from '../../../assets/galery1-8.png'
import galery9 from '../../../assets/galery1-9.png'
import galery10 from '../../../assets/galery1-10.png'
import galery11 from '../../../assets/galery1-11.png'
import galery12 from '../../../assets/galery1-12.png'
import galery13 from '../../../assets/galery1-13.png'

export default function Galery() {
    return (
        <main>
            <div className="space"></div>
            <section className="sectionBlockName">
                <div className="left_blocked">
                    <div className="left_blocked__space">
                        <h1>Галерея</h1>
                    </div>
                </div>
                <div className="right_blocked"></div>
            </section>
            <section className='gridGallery'>
                <div className="items items1"><img src={galery1} alt=""/></div>
                <div className="items items2"><img src={galery2} alt=""/></div>
                <div className="items items3"><img src={galery3} alt=""/></div>
                <div className="items items4"><img src={galery4} alt=""/></div>
                <div className="items items5"><img src={galery5} alt=""/></div>
                <div className="items items6"><img src={galery6} alt=""/></div>
                <div className="items items7"><img src={galery7} alt=""/></div>
                <div className="items items8"><img src={galery8} alt=""/></div>
                <div className="items items9"><img src={galery9} alt=""/></div>
                <div className="items items10"><img src={galery10} alt=""/></div>
                <div className="items items11"><img src={galery11} alt=""/></div>
                <div className="items items12"><img src={galery12} alt=""/></div>
                <div className="items items13"><img src={galery13} alt=""/></div>
            </section>
            <div className="space"></div>
            <button className='loadMore'>Загрузить еще</button>
            <div className="space"></div>
        </main>
    )
}