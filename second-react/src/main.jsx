import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/Pages/MainPage/App.jsx'
import Header from './Components/Elements/Header.jsx'
import Courses from "./Components/Pages/CoursePage/Courses.jsx";
import Footer from "./Components/Elements/Footer.jsx";
import Info from "./Components/Pages/InfoPage/Info.jsx";
import Documents from "./Components/Pages/DocumentPage/Documents.jsx";
import Galery from "./Components/Pages/GaleryPage/Galery.jsx";
import OtzivPage from "./Components/Pages/OtzivPage/OtzivPage.jsx";

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' index element={<App />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/documents' element={<Documents />}></Route>
          <Route path='/galery' element={<Galery />}></Route>
          <Route path='/otziv' element={<OtzivPage />}></Route>
      </Routes>
      <Footer />
  </BrowserRouter> 
)
