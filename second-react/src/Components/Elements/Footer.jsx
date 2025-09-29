import React from 'react';
import logo from '../../assets/logo.svg';
import {NavLink} from "react-router-dom";
import heo from "../../assets/heolocation.png";
import mes4 from "../../assets/mes4.png";
import mes5 from "../../assets/mes5.png";
import mes6 from "../../assets/mes6.png";
import telephone from "../../assets/telephonenum.png";
import messenger from "../../assets/messege.png";
import fortec from "../../assets/fortec.png";
import cervix from "../../assets/cervix.png";

export default function Footer () {
    return (
        <footer>
            <div className="footer_cont">
                <div className="left">
                    <h2>Задать вопрос</h2>
                    <p>получите индивидуальные условия обучения</p>
                    <div className="info_cont">
                        <div className="info">
                            <NavLink to='/'><img src={logo} alt=""/></NavLink>
                            <h2>Учебный Центр кольпоскопии доктора Петренко</h2>
                            <div className="line"></div>
                            <p>ООО «Центр кольпоскопии и цервикальной патологии»</p>
                            <span>Условия конфиденциальности предоставления и защиты информации</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="forms">
                        <div className="forms__left">
                            <input type="text" placeholder='Представьтесь'/>
                            <input type="text" placeholder='Ваш Email'/>
                        </div>
                        <div className="forms__right">
                            <textarea placeholder='Напишите ваш вопрос'></textarea>
                        </div>
                    </div>
                    <div className="question">
                        <div className="question__block">
                            <input type="checkbox"/>
                            <p>Отправляя заявку, вы принимаете условия политики конфиденциальности</p>
                        </div>
                        <button>Отправить вопрос</button>
                    </div>
                    <div className="bottom">
                        <div className="main_footer">
                            <div className="main_footer_cont">
                                <div className="content_top">
                                    <h2>+7 861 201-22-03</h2>
                                    <p><img src={heo} alt=""/> г. Краснодар, пр-т Чекистов, д. 42</p>
                                    <div className="images">
                                        <img src={mes4} alt=""/>
                                        <img src={mes5} alt=""/>
                                        <img src={mes6} alt=""/>
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="content_bottom">
                                    <div className="text_cont">
                                        <p>главная</p>
                                        <p>курсы</p>
                                        <p>специалисты</p>
                                    </div>
                                    <div className="text_cont">
                                        <p>оборудование</p>
                                        <p>отзывы</p>
                                        <p>галерея</p>
                                    </div>
                                    <div className="text_cont">
                                        <p>главдокументы</p>
                                        <p>клиника</p>
                                        <p>информация</p>
                                    </div>
                                    <div className="text_cont">
                                        <p><img src={telephone} alt=""/> Заказать звонок</p>
                                        <p><img src={messenger} alt=""/> форум</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom__line_block">
                            <div className="bottom__line_block__content">
                                <div className="bottom__line_block__content__block">
                                    <p>Наши <br/>партнеры</p>
                                    <img src={fortec} alt=""/>
                                    <img src={cervix} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}