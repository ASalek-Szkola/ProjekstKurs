import AddToCartButton from "./AddToCartButton";

function CourseCard({ course }) {
    return (
      <article className="courseCard">
        <figure>
        <img alt="img" loading="lazy" width="1280" height="800" decoding="async" src="Xhttps://sklep.szurek.tv/img/bezpieczny_programista.png"></img>
          {/* <img src={course.img} alt={course.name} className="courseCardImg"/> */}
        </figure>
        <div>
          <div>
            <span className="courseCardName">{ course.name }</span>
            <span className="courseCardDescription">{ course.description }</span>
          </div>
          <div>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-6 w-6"><path fill="currentColor" d="M3 14a2 2 0 012-2h.5a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z"></path><path fill="currentColor" fill-rule="evenodd" d="M19 3.5h-1a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5zM18 2a2 2 0 00-2 2v16a2 2 0 002 2h1a2 2 0 002-2V4a2 2 0 00-2-2h-1zM12.25 8.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5zm-1-1.5a2 2 0 00-2 2v11a2 2 0 002 2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1z" clip-rule="evenodd"></path></svg>
               {course.difficulty}
              </li>
              <li>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> */}
                Liczba godzin
              </li>
            </ul>
            <div>
              <span className="courseCardPrice">{ course.price } PLN</span>
            </div>
          </div>
        </div>
        
       
        <AddToCartButton/>
      </article>
    );
}

export default CourseCard;