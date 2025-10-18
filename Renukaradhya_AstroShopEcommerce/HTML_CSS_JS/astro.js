let cartCount = localStorage.getItem("cartCount")
  ? parseInt(localStorage.getItem("cartCount"))
  : 0;

let orderCount = localStorage.getItem("orderCount")
  ? parseInt(localStorage.getItem("orderCount"))
  : 0;

// Select elements
const cartLink = document.getElementById("cart");
const orderText = document.querySelector("p b strong");
const form = document.querySelector("form");
const productSelect = document.getElementById("product");
const qtyInput = document.getElementById("qty");

function updateCounts() {
  orderText.textContent = orderCount;
  cartLink.innerHTML = `&#128722;Cart:<strong>${cartCount}</strong>`;
}

// Initialize counts on load
updateCounts();

// -------------- ADD PRODUCT TO CART -------------
const tableRows = document.querySelectorAll("tbody tr");
tableRows.forEach((row) => {
  row.addEventListener("click", () => {
    if (cartCount >= 3) {
      alert("🛑 Cart is full! You can only add 3 items at a time.");
      return;
    }

    cartCount++;
    orderCount++;
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("orderCount", orderCount);
    updateCounts();
    alert("🛒 Item added to your cart!");
  });
});


//--------- PURCHASE FORM SUBMISSION -------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const buyer = document.getElementById("buyer").value.trim();
  const email = document.getElementById("email").value.trim();
  const product = productSelect.value;
  const qty = parseInt(qtyInput.value);
  const lang = document.getElementById("lang").value;
  const urgent = document.getElementById("urgent").checked;
  const address = document.getElementById("address").value.trim();

  if (!buyer || !email || !product || !lang) {
    alert("⚠️ Please fill all required fields!");
    return;
  }

  // Save the last order details
  const orderData = {
    buyer,
    email,
    product,
    qty,
    lang,
    urgent,
    address,
    date: new Date().toLocaleString(),
  };
  localStorage.setItem("lastOrder", JSON.stringify(orderData));

  alert(
    `✅ Order Confirmed!\n\n📦 Product: ${product}\n🧍 Buyer: ${buyer}\n✉️ Confirmation message will be sent to your: ${email}`
  );

  form.reset();
});

// --------- RESET CART ----------
const resetBtn = document.querySelector("button[type='reset']");
resetBtn.addEventListener("click", () => {
  if (confirm("⚠️ Do you want to reset all cart and form data?")) {
    cartCount = 0;
    orderCount = 0;
    localStorage.setItem("cartCount", 0);
    localStorage.setItem("orderCount", 0);
    updateCounts();
    alert("🗑️ Cart and form have been reset!");
  }
});

// // ------------- PROGRESS BAR DEMO UPDATE -----------
// const progressBar = document.getElementById("progress");
// let progress = 100;
// setInterval(() => {
//   if (progress < 100) {
//     progress += 10;
//     progressBar.value = progress;
//   } else {
//     progress = 30;
//     progressBar.value = progress;
//   }
// }, 2000);
