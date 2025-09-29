import './Courses.css'
import CourseCard from "../../Elements/CourseCard/CourseCard.jsx";

export default function Courses () {
    return(
        <main>
            <div className="space"></div>
            <section className="sectionBlockName">
                <div className="left_blocked">
                    <div className="left_blocked__space">
                        <h1>Курсы</h1>
                    </div>
                </div>
                <div className="right_blocked"></div>
            </section>
            <CourseCard />
            <div className="space"></div>
        </main>
    )
}