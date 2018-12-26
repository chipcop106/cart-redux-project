var initialState = [
  {
    id: 1,
    name: "Iphone 7 Plus",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/87839/iphone-7-plus-128gb-hh-600x600.jpg",
    description: " San pham Apple",
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "Iphone XS Max",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-400x460.png",
    description: " San pham Apple",
    price: 1000,
    inventory: 12,
    rating: 3
  },
  {
    id: 3,
    name: "Iphone 8",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg",
    description: " San pham Apple",
    price: 100000,
    inventory: 12,
    rating: 5
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
