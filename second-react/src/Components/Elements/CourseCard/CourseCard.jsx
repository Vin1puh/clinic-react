import {cardData} from "../../../data/data.js";
import Section2Card from "../Section2_Card/S2Card.jsx";
import calendar from "../../../assets/calendar.png";
import hat from "../../../assets/hat.png";
import diplom from "../../../assets/diplom.png";
import styles from "./CourseCard.module.css";

export default function CourseCard (){
    return (
        <div className={styles.bottom}>
            {cardData.map((item, index) => (
                <Section2Card key={index} {...item} />
            ))}
            <div className={styles.card1}>
                <div className={styles.block}>
                    <img src={calendar} alt=""/>
                    <div className={styles.button_cont}>
                        <h1>Расписание занятий</h1>
                        <button>Смотреть</button>
                    </div>
                </div>
            </div>
            <div className={styles.card2}>
                <div className={styles.block}>
                    <div className={styles.cont}>
                        <img src={hat} alt=""/>
                        <p>форма обучения: <h2>очная</h2></p>
                    </div>
                    <div className={styles.cont}>
                        <img src={diplom} alt=""/>
                        <p>аттестация: <h2>тестовый контроль</h2></p>
                    </div>
                </div>
            </div>
        </div>
    )
}