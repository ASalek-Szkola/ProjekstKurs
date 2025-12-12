import AddToCartButton from "./AddToCartButton";

function CourseCard({ name }) {
    return (
      <div>
        <span>{ name }</span>
        <AddToCartButton></AddToCartButton>
      </div>
    );
}

export default CourseCard;