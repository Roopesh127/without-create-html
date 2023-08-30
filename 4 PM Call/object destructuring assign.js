const order = {
    id: 1011,
    productName: "iPhone 14 Pro Max",
    brandDetails: {
      brandName: "Apple",
      origin: "USA",
      assembledIn: "India",
    },
    price: 145000,
    condition: "New",
  };
  const { brandDetails, id, productName, price, condition } = order;
  const { brandName, origin, assembledIn } = brandDetails;

  var generateMessage = (data) => {
    return `Hello Team. I have ordered a new ${productName} which cost me ${price}. Let me know when will i get it?`;
  };

  console.log(generateMessage(order));
  