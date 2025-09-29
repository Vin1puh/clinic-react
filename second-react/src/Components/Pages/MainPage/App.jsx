import Form from '../../Elements/Form/Form.jsx'
import first from '../../../assets/top-left.png'
import second from '../../../assets/top-right.png'
import third from '../../../assets/bottom-left.png'
import fourth from '../../../assets/bottom-right.png'
import five from '../../../assets/info.png'
import mainHuman from '../../../assets/mainHuman.png'
import CourseCard from "../../Elements/CourseCard/CourseCard.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, FreeMode} from 'swiper/modules';
import {firstSliderData, govnoData, questionData, textData} from "../../../data/data.js";
import 'swiper/css';
import 'swiper/css/free-mode';
import FirstSliderCard from "../../Elements/FirstSliderCard/FirstSliderCard.jsx";
import {useState} from "react";
import './App.css'
import SecondSlider from "../../Elements/SecondSlider/SecondSlider.jsx";
import Gallery from "../../Elements/Gallery/Gallery.jsx";

export default function App() {
    const [count, setCount] = useState(0);
    const [govno, setGovno] = useState(5);
    function plusCount () {
        if(count < 7){
            setCount(count + 1);
        }
        else{
            setCount(0);
        }
    }
    function minusCount () {
        if(count > 0){
            setCount(count - 1);
        }
        else{
            setCount(7);
        }
    }
  return (
      <main>
          <section className="section1">
              <h3>ООО "Центр кольпоскопии и цервикальной патологии"</h3>
              <div className="section_block">
                  <div className="left_block">
                      <img src={first} alt=""/>
                      <Form/>
                  </div>
                  <div className="right_block">
                      <img src={second} alt=""/>
                      <div className="right_block__bottom">
                          <img src={third} alt=""/>
                          <div className="right_block__bottom__right">
                              <img src={fourth} alt=""/>
                              <img src={five} alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div className="space"></div>
          <section className="section2">
              <div className="top">
                  <h1>Программы дополнительного профессионального образования</h1>
                  <h3>Обучение проводится в специализированном классе учебного центра с использованием мультимедийного
                      оборудования и
                      гинекологического кабинета клиники по адресу: г. Краснодар, проспект Чекистов, 42</h3>
              </div>
              <CourseCard/>
          </section>
          <div className="space"></div>
          <section className="section3">
              <div className="left">
                  <div className="cont">
                      <div className="space">
                          <h2>Автор курса</h2>
                          <h1>ПЕТРЕНКО <br/>СЕРГЕЙ ИВАНОВИЧ</h1>
                      </div>
                  </div>
                  <div className="text_block">
                      <p>Стаж работы <span>27 лет</span></p>
                      <p>Учредитель и руководитель ООО «Центр кольпоскопии и цервикальной патологии», врач
                          акушер-гинеколог, преподаватель
                          дополнительного профессиональонго образования.</p>
                      <p>Автор российского атласа по кольпоскопии («Кольпоскопия. Атлас» Т.Н.Бебнева, С.И.Петренко Под
                          редакцией В.Е.
                          Радзинского).</p>
                  </div>
              </div>
              <img src={mainHuman} alt=""/>
          </section>
          <div className="space"></div>
          <section className="section4">
              <div className="top">
                  <h1>Новости</h1>
                  <div className="pagination">
                      <h3>←</h3>
                      <div className="line active"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <h3>→</h3>
                  </div>
              </div>
              <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  freeMode={true}
                  loop={true}
                  autoplay={true}
                  speed={3000}
                  modules={[FreeMode, Autoplay]}
                  className="mySwiper"
              >
                  {firstSliderData.map((item, index) => (
                      <SwiperSlide key={index}>
                          <FirstSliderCard {...item}/>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </section>
          <div className="space"></div>
          <section className="section5">
              <div className="space"></div>
              <div className="absolute_vodka"></div>
              <div className="section5__cont">
                  <div className="left">
                      <h3>Оборудование центра</h3>
                      <h1>Кольпоскоп leisegang 3mvc led usb</h1>
                      <div className="info_cont">
                          <h5>Страна<p>Германия</p></h5>
                          <h5>Источник света<p>Светодиодная лампа</p></h5>
                          <h5>Освещенность ЛК<p>4000/6000</p></h5>
                          <h5>Вид кольпоскопа<p>Оптический</p></h5>
                          <h5>Фокусное расстояние мм<p>400</p></h5>
                          <h5>Увеличение мин макс<p>7,5 / 15 / 30</p></h5>
                          <h5>Диаметр рабочго поля мм<p>7,5 / 15 / 30</p></h5>
                          <h5>Увеличение мин макс<p>7,5 / 15 / 30</p></h5>
                          <h5>межзрачковое расстояние<p>58</p></h5>
                          <h5>тип штатива<p>прямой с региулируемой высоттой</p></h5>
                      </div>
                  </div>
                  <div className="right">
                      <div className="right__top">
                          <img src={govnoData[govno]?.photo || ''} alt=""/>
                      </div>
                      <div className="right__bottom">
                          <Swiper className='swiper'
                                  slidesPerView={5}
                                  spaceBetween={10}
                                  freeMode={true}
                                  loop={true}
                                  autoplay={true}
                                  speed={3000}
                                  modules={[FreeMode, Autoplay]}
                          >
                              {govnoData.map((item, index) => (
                                  <SwiperSlide key={index}>
                                      <img onClick={() => setGovno(index)} src={item.photo} alt=""/>
                                  </SwiperSlide>
                              ))}
                          </Swiper>
                      </div>
                  </div>
              </div>
          </section>
          <div className="space"></div>
          <SecondSlider />
          <div className="space"></div>
          <Gallery />
          <div className="space"></div>
          <section className="section8">
              <div className="top">
                  <h1>Ответы на вопросы</h1>
              </div>
              <div className="bottom">
                  <div className="bottom__left">
                      <div className="question_table">
                          <div className="question_table__cont">
                              {questionData.map((item, index) => (
                                  <div className={count === index ? 'active question' : "question"} key={index}>
                                      <div onClick={() => setCount(index)} className="question__cont">
                                          <h3>{item.number}</h3>
                                          <p>{item.text}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="interact">
                          <div className="interact__cont">
                              <button onClick={() => minusCount()}>←</button>
                              {Array(8).fill().map((_, index) => (
                                  <div key={index} className={count === index ? "active line" : "line"}></div>
                              ))}
                              <button onClick={() => plusCount()}>→</button>
                          </div>
                      </div>
                  </div>
                  <div className="bottom__right">
                      <textarea
                          value={textData[count]?.text || ''}
                          disabled></textarea>
                  </div>
              </div>
          </section>
          <div className="space"></div>
      </main>

  )
}