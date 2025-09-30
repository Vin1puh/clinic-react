import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.svg'
import heo from '../../assets/heolocation.png'
import mes1 from '../../assets/lir1.png'
import mes2 from '../../assets/lir2.png'
import mes3 from '../../assets/lir3.png'

export default function Header (){
    return(
        <header>
            <NavLink to='/'><img src={Logo} alt="" /></NavLink>
            <h2>Учебный Центр кольпоскопии доктора Петренко</h2>
            <nav>
                <div className="nav_menu">
                    <NavLink to='/'>Главная   </NavLink>
                    <NavLink to='/courses'>Курсы   </NavLink>
                    <NavLink to='/asd'>Специалисты   </NavLink>
                    <NavLink to='/asd'>Оборудование   </NavLink>
                    <NavLink to='/asd'>Расписание</NavLink>
                    <NavLink to='/otziv'>Отзывы   </NavLink>
                    <NavLink to='/galery'>Галерея    </NavLink>
                    <NavLink to='/documents'>Документы    </NavLink>
                    <NavLink to='/clinic'>Клиника    </NavLink>
                    <NavLink to='/asd'>Форум    </NavLink>
                    <NavLink to='/info'>Информация</NavLink>
                </div>
            </nav>
            <h1>+7 861 201-22-03</h1>
            <button>Заказать звонок</button>
            <div className="messenger-block">
                <img src={mes1} alt="" />
                <img src={mes2} alt="" />
                <img src={mes3} alt="" />
            </div>
            <h2><img src={heo} alt="" /> г. Краснодар, пр-т Чекистов, д. 42</h2>
        </header>
    )
}