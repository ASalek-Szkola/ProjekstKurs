import FilterPanel from './FilterPanel';
import CourseCard from './CourseCard';

function CoursePanel({ courses }) {

    console.log(courses)

    const courseCards = []
    courses.forEach(c => {
        courseCards.push(
            <CourseCard course={c}/>
        )
    });

    return (
      <div>
        <FilterPanel/>
        <div className="coursePanelGrid">
            {courseCards} 
        </div>
      </div>
    );
}

export default CoursePanel;