import React from "react";
import styles from './Form.module.css'

export default function Form (){
    return(
        <form action="">
            <div className={styles.form_block}>
                <h1>Запишитесь на курс</h1>
                <h2>получите индивидуальные условия обучения</h2>
                <input type="text" placeholder="Представьтесь"/>
                <input type="text" placeholder="Ваш Email"/>
                <input type="text" placeholder="Ваш Телефон"/>
                <input type="text" placeholder="Выберите курс"/>
                <input type="text" placeholder="Дата начала"/>
                <p><input type="checkbox" />Отправляя заявку, вы принимаете условия политики конфиденциальности</p>
                <button>Записаться</button>
            </div>
        </form>
    )
}