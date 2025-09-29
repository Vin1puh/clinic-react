import styles from './Gallery.module.css'
import palata1 from "../../../assets/palata1.png";
import palata2 from "../../../assets/palata2.png";
import palata3 from "../../../assets/palata3.png";
import palata4 from "../../../assets/palata4.png";
import palata5 from "../../../assets/palata5.png";
import palata6 from "../../../assets/palata6.png";
import palata7 from "../../../assets/palata7.png";
import palata8 from "../../../assets/palata8.png";
import {useState} from "react";

export default function Gallery() {
    const [gallery, setGallery] = useState(0);
    function plusGallery () {
        if(gallery < 4){
            setGallery(gallery + 1);
        }
        else{
            setGallery(0);
        }
    }
    function minusGallery () {
        if(gallery > 0){
            setGallery(gallery - 1);
        }
        else{
            setGallery(4);
        }
    }
    return (
        <section className={styles.section7}>
            <div className={styles.top}>
                <h1>Галерея</h1>
                <div className={styles.navigation}>
                    <button onClick={() => minusGallery()}>←</button>
                    {Array(5).fill().map((_, index) => (
                        <div key={index} className={`${styles.line} ${gallery === index ? styles.active : ''}`}></div>
                    ))}
                    <button onClick={() => plusGallery()}>→</button>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={`${styles.item} ${styles.item1}`}><img src={palata1} alt=""/></div>
                <div className={`${styles.item} ${styles.item2}`}><img src={palata2} alt=""/></div>
                <div className={`${styles.item} ${styles.item3}`}><img src={palata3} alt=""/></div>
                <div className={`${styles.item} ${styles.item4}`}><img src={palata4} alt=""/></div>
                <div className={`${styles.item} ${styles.item5}`}><img src={palata5} alt=""/></div>
                <div className={`${styles.item} ${styles.item6}`}><img src={palata6} alt=""/></div>
                <div className={`${styles.item} ${styles.item7}`}><img src={palata7} alt=""/></div>
                <div className={`${styles.item} ${styles.item8}`}><img src={palata8} alt=""/></div>
            </div>
        </section>
    )
}