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
const tooltip = document.getElementById("tooltip");

function showTooltip(field) {
  tooltip.style.display = "block";
  tooltip.textContent = "Type Here";
}

function hideTooltip() {
     tooltip.style.display = "none"
}

fields.forEach(field => {
  field.addEventListener("mouseover", () => showTooltip(field));
  field.addEventListener("mouseout", () => hideTooltip());
  
});

// Prevent submission if fields are empty, showing validation messages
const form = document.getElementById("surveyForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    if (!userName || !email || !comments) {
        alert("All fields required.");
        return;
    } else {
        alert("Thank you for your submission!")
    }
// Dynamically append valid feedback entries to a <div id="feedback-display"> container
const feedbackDisplay = document.getElementById("feedback-display");
const entry = document.createElement("p")
entry.textContent = `${userName} (${email}): ${comments}`;
feedbackDisplay.appendChild(entry);

nameInput.value = "";
emailInput.value = "";
commentsInput.value = "";
});