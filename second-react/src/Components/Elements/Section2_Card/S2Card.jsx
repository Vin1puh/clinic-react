import styles from './S2Card.module.css'

export default function Section2Card(props) {
    return (
        <div className={styles.card} style={{width:`${props.width}%`, backgroundColor: props.backgroundColor}}>
            <div className={styles.card_block}>
                <div className={styles.card_block__top}>
                    <h2>{props.nameOf}</h2>
                    <p>подробнее →</p>
                </div>
                <div className={styles.card_block__bottom}>
                    <h1 style={{color: `${props.color}`, borderBottom: `1px solid ${props.color}`}}>{props.number}</h1>
                    <div className={styles.block}>
                        <h2>{props.hours} часов<p>(6 дней)</p></h2>
                        <h2>{props.price} ₽</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}