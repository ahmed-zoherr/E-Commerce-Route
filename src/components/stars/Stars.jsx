import {
  faStar as solidStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stars({ rating }) {
  // rating = 3.6

  function getStarIcon(position) {
    if (rating >= position) {
      return solidStar; // نجمة كاملة
    } else if (rating >= position - 0.5) {
      return faStarHalfStroke; // نص نجمة
    } else {
      return regularStar; // نجمة فاضية
    }
  }

  return (
    <>
      <div className="stars text-yellow-400">
        {[1, 2, 3, 4, 5].map((position) => (
          <FontAwesomeIcon key={position} icon={getStarIcon(position)} />
        ))}
      </div>
    </>
  );
}
