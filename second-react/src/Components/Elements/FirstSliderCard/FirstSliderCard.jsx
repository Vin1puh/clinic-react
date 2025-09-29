import styles from './FirstSliderCard.module.css';

export default function FirstSliderCard(props) {
    return (
        <div className={styles.slider_card}>
            <img src={props.image} alt=""/>
            <h2>Что такое кризис трех лет, и как преодолеть</h2>
            <p>{props.text}</p>
            <div className={styles.data_block}>
                <span>14.10.2021</span>
                <h3>Читать →</h3>
            </div>
        </div>
    )
}