import planet from '../../../assets/planet.png'
import styles from './References.module.css'

export default function References (props) {
    return (
        <div className={styles.forSpace}>
            <div className={styles.reference}>
                <div className={styles.reference__cont}>
                    <p>{props.text}</p>
                    <div className={styles.image}>
                        <img src={planet} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}