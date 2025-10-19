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
const fields = document.querySelectorAll("input, textarea");
const tooltip = document.getElementById("tooltip");

function showTooltip(field) {
    tooltip.textContent = "Type Here";
    tooltip.classList.add("visible");
}

function hideTooltip() {
    tooltip.classList.remove("visible");
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
    };
    
// Dynamically append valid feedback entries to a <div id="feedback-display"> container
const feedbackDisplay = document.getElementById("feedback-display");
const entry = document.createElement("p")
entry.textContent = `${userName} (${email}): ${comments}`;
feedbackDisplay.appendChild(entry);

nameInput.value = "";
emailInput.value = "";
commentsInput.value = "";
});

// Step 4 & 5 - Use event bubbling and delegation to manage events from all input fields & Prevent background clicks from triggering form-related events using stopPropagation()
document.querySelector("header").addEventListener("click", (e) => {
    if (e.target.matches("input, textarea")) {
        console.log("Interacting with:", e.target.id);
        e.stopPropagation();
    }
});