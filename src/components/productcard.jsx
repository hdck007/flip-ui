const ProductCard = ({ product }) => {
  return (
    <div className="w-[30%] min-w-[280px] border h-96 rounded-md hover:shadow-xl transition-all">
      <div className="h-2/3 bg-red-100">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-2 px-4">
        <div className="text-xl flex items-center">
          <span className="font-extrabold">{product.name}</span>&nbsp;
          <span className="text-sm">by {product.brand}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-base font-bold">{product.price}$</span>
          <span className="text-base font-bold">Gender: {product.gender}</span>
          <span className="text-base font-bold">Size: {product.size}</span>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
