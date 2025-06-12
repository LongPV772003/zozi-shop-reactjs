const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg p-2 hover:shadow">
        <img src={`/assets/${product.image}`} alt={product.name} className="w-full h-32 object-cover" />
        <h3 className="text-md mt-2">{product.name}</h3>
        <p className="text-orange-500 font-bold">${product.price}</p>
        <button className="bg-orange-500 text-white px-3 py-1 rounded mt-2 hover:bg-orange-600">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  