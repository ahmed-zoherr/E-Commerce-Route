import Loading from "../Loading/Loading";
import Stars from "../stars/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRemoveFromCart } from "../../Hooks/useRemoveFromCart";
import { useUpdateCart } from "../../Hooks/useUpdateCart";
import ProdcutCartSkelton from "../Skelton/ProdcutCartSkelton";

export default function ProductCart({ ProductInfo }) {
  const { count, price, product } = ProductInfo;
  const { title, ratingsAverage, id, imageCover, category } = product;
  const { name } = category || {};
  const { removeFromCart } = useRemoveFromCart();
  const { updateCart, isPending } = useUpdateCart();
  if (isPending) {
    return <ProdcutCartSkelton />;
  }
  return (
    <div className="flex items-center gap-4">
      {/* الصورة */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={imageCover}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* المعلومات */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">{name}</p>
        <div className="flex items-center gap-1 mt-1">
          <Stars rating={ratingsAverage} />
          <span className="text-xs text-gray-400">{ratingsAverage}</span>
        </div>
      </div>

      {/* الكوانتيتي */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateCart({ id, count: count - 1 })}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon icon={faMinus} className="text-xs" />
        </button>
        <span className="text-sm font-medium w-4 text-center">{count}</span>
        <button
          onClick={() => updateCart({ id, count: count + 1 })}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon icon={faPlus} className="text-xs" />
        </button>
      </div>

      {/* السعر */}
      <p className="text-sm font-bold text-gray-900 w-20 text-right">
        {price} EGP
      </p>

      {/* حذف */}
      <button
        onClick={() => removeFromCart({ id })}
        className="text-red-400 hover:text-red-600 transition-colors ml-2"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
