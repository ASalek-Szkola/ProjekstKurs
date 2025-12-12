import FilterPanel from './FilterPanel';
import CourseCard from './CourseCard';

function CoursePanel({  }) {
    return (
      <div>
        <FilterPanel></FilterPanel>
        <div>
            {/* TESTOWO */}
            <CourseCard name={"test22"}/>
        </div>
      </div>
    );
}

export default CoursePanel;