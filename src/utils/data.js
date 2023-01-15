// data for clothing with size and price and gender and image and name
const products = [
  {
    name: "T-Shirt",
    price: 10,
    size: "S",
    brand: "Nike",
    gender: "M",
	// 10 words description
	description: "This is a T-Shirt, with cotton cloth",
  },
  {
    name: "Causual T-Shirt",
    price: 15,
    size: "M",
    brand: "Adidas",
    gender: "F",
	description: "This is a Causual T-Shirt, with cotton cloth",
  },
  {
    name: "T-Shirt",
    price: 10,
    size: "S",
    brand: "Nike",
    gender: "M",
	description: "This is a T-Shirt, with cotton cloth",
  },
  {
    name: "Trousers",
    price: 20,
    size: "L",
    brand: "Puma",
    gender: "F",
	description: "This is a Trousers, with cotton cloth",
  },
  {
    name: "Blazer",
    price: 30,
    size: "M",
    brand: "Manyawar",
    gender: "M",
	description: "This is a Blazer, with nylon cloth",
  },
  {
    name: "Sherwani",
    price: 40,
    size: "L",
    brand: "Manyawar",
    gender: "M",
	description: "This is a Sherwani, with cotton cloth",
  },
  {
    name: "Cap",
    price: 5,
    size: "S",
    brand: "Nike",
    gender: "M",
	description: "This is a Cap, with woolen cloth",
  },
  {
    name: "Shirt",
    price: 10,
    size: "M",
    brand: "Allen",
    gender: "F",
	description: "This is a Shirt, with cotton cloth",
  },
  {
	name: "Hoodie",
	price: 20,
	size: "L",
	brand: "Nike",
	gender: "M",
	description: "This is a Hoodie, with woolen cloth",
  }
];

export default products;

const brands = products.map((product) => product.brand);
const uniqueBrands = [...new Set(brands)];
export const brandsList = uniqueBrands;
export const sizes = ["S", "M", "L"];
export const gender = ["M", "F"];