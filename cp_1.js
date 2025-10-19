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