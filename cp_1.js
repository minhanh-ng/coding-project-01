// Step 3 - Use DOM event listeners
// Count characters as the user types (use input or keydown event)
const nameInput = document.getElementById("userName");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById('comments');

commentsInput.addEventListener("input", () => {
    console.log("Characters:", commentsInput.value.length)
});

emailInput.addEventListener("input", () => {
    console.log("Characters:", emailInput.value.length)
} );

nameInput.addEventListener("input", () =>{
    console.log("Characters:", nameInput.value.length)
});

// Display tooltips on field mouseover and hide on mouseout
const fields = document.querySelectorAll("input");

function showTooltip(field) {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "block";
}

function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
     tooltip.style.display = "none"
}

fields.forEach(field => {
  field.addEventListener("mouseover", () => showTooltip(field));
  field.addEventListener("mouseout", () => hideTooltip());
  tooltip.textContent = "Type Here";
});
