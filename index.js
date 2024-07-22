//step1

function CreateProduct(product_name, brand, reviews, price, rating) {
    let product = {
        product_name,
        brand,
        reviews,
        price,
        rating
    };

    // Methods attached to prototype
    product.getPrice = function() {
        return this.price;
    };

    product.increasePrice = function(amount) {
        this.price += amount;
        return this.price;
    };

    product.decreasePrice = function(amount) {
        this.price -= amount;
        return this.price;
    };

    product.isExpensive = function() {
        return this.price >= 1000;
    };

    return product;
}

//step2 

function electronics(product_name, brand, reviews, price, rating, warranty) {
    let electronicsProduct = CreateProduct(product_name, brand, reviews, price, rating);

    electronicsProduct.warranty = warranty;

    electronicsProduct.bill = function() {
        // Applying 10% discount
        return this.price * 0.9;
    };

    electronicsProduct.details = function() {
        return `${this.product_name} of brand ${this.brand} with warranty of ${this.warranty} years at a price ${this.bill()} having a discount of 10%`;
    };

    return electronicsProduct;
}

//step3 

function crockery(product_name, brand, reviews, price, rating, material) {
    let crockeryProduct = CreateProduct(product_name, brand, reviews, price, rating);

    crockeryProduct.material = material;

    crockeryProduct.bill = function() {
        // Applying 15% discount
        return this.price * 0.85;
    };

    crockeryProduct.details = function() {
        return `${this.product_name} of brand ${this.brand} of material ${this.material} at a price ${this.bill()} having a discount of 15%`;
    };

    return crockeryProduct;
}


// Example invocation of CreateProduct


let product1 = CreateProduct(
    "Black Pure Cotton Formal Shirt",
    "Peter England Elite",
    224,
    1799,
    4.3
  );
  console.log(product1);
  console.log(product1.getPrice()); // 1799
  console.log(product1.increasePrice(301)); // 2100
  console.log(product1.isExpensive()); // true
  console.log(product1.decreasePrice(1200)); // 900
  console.log(product1.isExpensive()); // false
  
  // Example invocation of electronics product
  let electronics1 = electronics("LED TV", "LG", 100, 5000, 4.2, 2);
  console.log(electronics1);
  console.log(electronics1.getPrice()); // 5000
  console.log(electronics1.increasePrice(400)); // 5400
  console.log(electronics1.isExpensive()); // true
  console.log(electronics1.decreasePrice(500)); // 4900
  console.log(electronics1.isExpensive()); // true
  console.log(electronics1.bill()); // 4500
  console.log(electronics1.details()); // LED TV of brand LG with warranty of 2 years at a price 4500 having a discount of 10%
  
  // Example invocation of crockery product
  let crockery1 = crockery(
    "21 Piece Dinnerware",
    "Diva",
    104,
    16000,
    4.5,
    "ceramic"
  );
  console.log(crockery1);
  console.log(crockery1.getPrice()); // 16000
  console.log(crockery1.increasePrice(700)); // 16700
  console.log(crockery1.isExpensive()); // true
  console.log(crockery1.decreasePrice(200)); // 16500
  console.log(crockery1.isExpensive()); // true
  console.log(crockery1.bill()); // 13600
  console.log(crockery1.details()); // 21 Piece Dinnerware of brand Diva of material ceramic at a price 13600 having a discount of 15%
  
