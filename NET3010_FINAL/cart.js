
// Add To Cart Function
document.addEventListener("DOMContentLoaded", () => {
  // Add to Cart
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const name = card.querySelector("h4").innerText;
      const price = card.querySelector("p").innerText;
      const image = card.querySelector("img").getAttribute("src");

      const cartItem = { name, price, image };

      // Get existing cart or initialize it
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(cartItem);

      // Save updated cart
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${name} added to cart!`);
    });
  });

  // Cart Display Support
  const cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <img src="\${item.image}" alt="\${item.name}" style="width: 80px;">
          <div>
            <h4>\${item.name}</h4>
            <p>\${item.price}</p>
          </div>
        `;
        cartContainer.appendChild(div);
      });
    }
  }
});
