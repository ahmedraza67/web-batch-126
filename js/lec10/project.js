// Here's a breakdown of each menu task with a short explanation and hints — no code, just direction for you to implement:

// **1. View Products**
// Display all products in the array in a readable format (table or list).
// *Hint:* Use `console.table(products)` for a quick clean view, or `forEach` if you want custom formatting.

// **2. Add Product**
// Create a new product object and push it into the array.
// *Hint:* Auto-generate the `id` using `products.length + 1` or find the max existing id and add 1, to avoid duplicates.

// **3. Search Product**
// Find a product by name or id and return matching results.
// *Hint:* Use `.filter()` for partial name matches (case-insensitive with `.toLowerCase()`), or `.find()` for an exact id match.

// **4. Update Product**
// Locate a product by id and modify one or more of its fields.
// *Hint:* Use `.find()` to get a reference to the object, then directly reassign the properties you want to change — no need to rebuild the array.

// **5. Delete Product**
// Remove a product from the array by its id.
// *Hint:* Use `.filter()` to return a new array excluding the matched id, and reassign it to `products`.

// **6. Sort Products**
// Reorder products based on a chosen field like price, rating, or name.
// *Hint:* Use `.sort((a, b) => a.price - b.price)` for ascending, swap `a` and `b` for descending; use `localeCompare()` for sorting by name.

// **7. Product Statistics**
// Calculate summary values like total stock, average price, or highest-rated item.
// *Hint:* Combine `.reduce()` for sums/averages and `.sort()` or `Math.max()` for finding top values.

// **8. Add To Cart**
// Move or reference a product (with a chosen quantity) into a separate cart array.
// *Hint:* Check `stock` before adding, and consider whether to decrement `stock` immediately or only at checkout.

// **9. View Cart**
// Display the current contents of the cart array along with quantities and subtotal.
// *Hint:* Use `.reduce()` to calculate the running total price across all cart items.

// **10. Checkout**
// Finalize the cart: calculate total cost, apply any discounts/tax, and clear the cart.
// *Hint:* After confirming checkout, update the real `products` stock and reset the cart array to empty.

let products = [
  {
    id: 1,
    name: "Samsung S24",
    category: "Mobile",
    price: 250000,
    stock: 5,
    rating: 4.7,
    specs: {
      ram: "8GB",
      storage: "256GB",
      color: "Phantom Black",
      battery: "4000mAh",
    },
    seller: {
      name: "TechZone",
      location: "Lahore",
      verified: true,
    },
    reviews: [
      { user: "Ali", comment: "Great phone, fast performance", stars: 5 },
      { user: "Sara", comment: "Battery could be better", stars: 4 },
    ],
  },
  {
    id: 2,
    name: "Dell Laptop",
    category: "Laptop",
    price: 180000,
    stock: 3,
    rating: 4.5,
    specs: {
      ram: "16GB",
      storage: "512GB SSD",
      processor: "Intel i7",
      color: "Silver",
    },
    seller: {
      name: "LaptopHub",
      location: "Karachi",
      verified: false,
    },
    reviews: [
      { user: "Bilal", comment: "Perfect for office work", stars: 5 },
      { user: "Hina", comment: "Slightly heavy but good build", stars: 4 },
    ],
  },
];
