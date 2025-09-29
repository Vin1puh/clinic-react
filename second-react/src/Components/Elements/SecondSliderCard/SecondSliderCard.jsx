import styles from './SecondSliderCard.module.css'
import star from '../../../assets/star.png'

export default function SecondSliderCard(props) {
    return (
        <div className={styles.slider_card} style={{backgroundColor:`${props.backgroundColor}`}}>
            <div className={styles.space}>
                <h1>{props.nameOf}</h1>
                <div className={styles.stars}>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={props.star} alt=""/>
                    <img src={props.star} alt=""/>
                </div>
                <div className={styles.text_block}>
                    <p>{props.text}</p>
                </div>
                <div className={styles.data_block}>
                    <h3>Читать весь отзыв →</h3>
                    <span>14.10.2021</span>
                </div>
            </div>
        </div>
    )
}