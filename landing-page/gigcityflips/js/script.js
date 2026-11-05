const button = document.querySelector(".menu-toggle"); // first element with that class
const links = document.querySelector(".nav-links");

button.addEventListener("click", () => {
    links.classList.toggle("open");   // adds it if missing, removes it if present
    const isOpen = links.classList.contains("open");
    button.setAttribute("aria-expanded", isOpen);
});

//Form Validation
const form = document.querySelector("#offer-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelectorAll(".error").forEach((el) => el.textContent = "");
    let isValid=true;
    const name = document.querySelector("#name").value.trim();
    const emailInput = document.querySelector("#email");
    const phone = document.querySelector("#phone").value.trim();
    
    if (name === "") {
        document.querySelector("#name-error").textContent = "Please enter your name.";
        isValid=false;
    }

    const digits = phone.replace(/\D/g, "");   // "(423) 555-1234" → "4235551234"
    if (digits.length !== 10) {
        document.querySelector("#phone-error").textContent = "Please enter a valid phone number.";
        isValid=false;
    }

    if (!emailInput.checkValidity()) {
        document.querySelector("#email-error").textContent = "Please enter a valid email.";
        isValid=false;
    }
    if (document.querySelector("#condition").value === ""){
        document.querySelector("#condition-error").textContent = "Please choose a condition.";
        isValid=false;
    }
    if (document.querySelector('input[name="timeline"]:checked')===null){
        document.querySelector("#timeline-error").textContent = "Please choose a timeline.";
        isValid=false;
    }

    if (isValid){
        form.hidden = true; // hide the form
        document.querySelector("#thank-you").hidden = false;  
        //code to submit form  
    }

})