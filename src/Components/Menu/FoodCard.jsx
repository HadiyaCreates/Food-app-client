
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({
  _id,
  name,
  price,
  oldPrice,
  discount,
  image,
  isWishlisted,
  toggleWishlist,
  cart,
  setCart
}) => {
  const navigate = useNavigate();

  // const handleAddToCart = () => {
  //   const exists = (cart || []).some(item => item._id === _id);

  //   if (!exists) {
  //     setCart([...cart, { _id, name, price, image, quantity: 1 }]);
  //   }

  //   navigate('/cart');
  // };

  const handleAddToCart = () => {
  const safeCart = Array.isArray(cart) ? cart : [];
  const exists = safeCart.some(item => item._id === _id);

  if (!exists) {
    setCart([...safeCart, { _id, name, price, image, quantity: 1 }]);
  }

  navigate('/cart');
};


  return (
    <div className="relative bg-black text-white p-4 rounded-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
      {/* Heart Icon */}
      <button
        className={`absolute top-2 left-2 p-1 rounded-full bg-white ${
          isWishlisted ? 'text-red-600' : 'text-gray-600'
        }`}
        onClick={toggleWishlist}
      >
        <FaHeart />
      </button>

      {/* Discount badge */}
      {discount && (
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -₹{discount}
        </span>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain mx-auto my-2"
      />

      {/* Name */}
      <h3 className="text-center text-lg font-semibold mt-2">{name}</h3>

      {/* Prices */}
      <div className="text-center mt-1">
        {oldPrice && (
          <span className="line-through text-gray-400 mr-2">₹{oldPrice}.00</span>
        )}
        <span className="text-orange-400 font-semibold">₹{price}.00</span>
      </div>

      {/* Add to Cart */}
      <button
        className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 w-full rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
