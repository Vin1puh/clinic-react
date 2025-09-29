import star from '../../../assets/star2.png'
import blindstar from '../../../assets/blind_star2.png'
import styles from './Otziv.module.css';

export default function Otziv (props){
    return (
        <div className={`${styles.Otziv} ${`itemss${props.class}`}`}>
            <div className={styles.Otziv_card}>
                <div className={styles.Otziv_card__cont}>
                    <h3>{props.headText}</h3>
                    <div className={styles.stars}>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        {props.exist ? <img src={star} alt=""/> : <img src={blindstar} alt=""/>}
                        {props.exist ? <img src={star} alt=""/> : <img src={blindstar} alt=""/>}
                    </div>
                    <p>{props.text}</p>
                    <div className={styles.data}>
                        <span>14.10.2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}