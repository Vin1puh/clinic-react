import styles from './Blanks.module.css';
import DOC from '../../../assets/DOC.png'

export default function Blanks (props) {
    return (
        <div className={styles.forSpace}>
            <div className={styles.blank} style={{backgroundColor: `${props.color}`}}>
                <div className={styles.blank__cont}>
                    <div className={styles.blank__cont__top}>
                        <p>{props.text}</p>
                        <img src={DOC} alt=""/>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.blank__cont__bottom}>
                        <h2>DOC<p>200 Kb</p></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}