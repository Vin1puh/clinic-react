import styles from './SecondSlider.module.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";
import {secondSliderData} from "../../../data/data.js";
import SecondSliderCard from "../SecondSliderCard/SecondSliderCard.jsx";

export default function SecondSlider () {
    return (
        <section className={styles.section6}>
            <div className={styles.top}>
                <h1>Новости</h1>
                <div className={styles.pagination}>
                    <h3>←</h3>
                    <div className={`${styles.line} ${styles.active}`}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <h3>→</h3>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                autoplay={true}
                speed={3000}
                modules={[FreeMode, Autoplay]}
                className={styles.swiper}
            >
                {secondSliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SecondSliderCard {...item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button>Оставить отзыв</button>
        </section>
    )
}