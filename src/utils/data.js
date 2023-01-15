// data for clothing with size and price and gender and image and name
const products = [
  {
    name: "T-Shirt",
    price: 10,
    size: "S",
    brand: "Nike",
    gender: "M",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvmZPW972d0aacLCFPc1wM9nr_W8Xg_uJmyQF1DeHBU0pVhIwUg9nmNrSFjPe4bQPV5M&usqp=CAU",
	description: "This is a T-Shirt, with cotton cloth",
  },
  {
    name: "Causual T-Shirt",
    price: 15,
    size: "M",
    brand: "Adidas",
    gender: "F",
	description: "This is a Causual T-Shirt, with cotton cloth",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBW0UxcOen9kihMZC_h19HJ5Ot8rbsX-RGJQ&usqp=CAU",
  },
  {
    name: "T-Shirt",
    price: 10,
    size: "S",
    brand: "Nike",
    gender: "M",
	description: "This is a T-Shirt, with cotton cloth",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWj8D0uspjOtxY_SFHGE8ErlUbDkmGJptVBRH_GxhtSzw67sSsJ5TNTlzhiLq_sh8AMw&usqp=CAU",
  },
  {
    name: "Trousers",
    price: 20,
    size: "L",
    brand: "Puma",
    gender: "F",
	description: "This is a Trousers, with cotton cloth",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9rYdlWExjC_IdySdCGsCND44W8vB8cLEeA&usqp=CAU",
  },
  {
    name: "Blazer",
    price: 30,
    size: "M",
    brand: "Manyawar",
    gender: "M",
	description: "This is a Blazer, with nylon cloth",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3mhyjOq_M_7j1b5K9r1fkPZbyP9Gm7uUBA&usqp=CAU",
  },
  {
    name: "Sherwani",
    price: 40,
    size: "L",
    brand: "Manyawar",
    gender: "M",
	description: "This is a Sherwani, with cotton cloth",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56bHkG-sEpF-39xD0pvEDN2edjbakBOSEdw&usqp=CAU",
  },
  {
    name: "Cap",
    price: 5,
    size: "S",
    brand: "Nike",
    gender: "M",
	description: "This is a Cap, with woolen cloth",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONJAUa2iRpu2z0Ko9DUSs9m0GSIczFsLTc8UOIGjjHvql0MFoo0w48D5IU-tEjOjoio4&usqp=CAU",
  },
  {
    name: "Shirt",
    price: 10,
    size: "M",
    brand: "Allen",
    gender: "F",
	description: "This is a Shirt, with cotton cloth",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIUMfZUFXRAHDBKfKQfqdlN2QCB76CeP-XA&usqp=CAU",
},
{
	name: "Hoodie",
	price: 20,
	size: "L",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaCK1dRUB2dOAUvxyWyEIVjTTegV7FI1BQG_t_rO-DpubFVFaK_yRRTlHBAQKZXF2Sp0&usqp=CAU",
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