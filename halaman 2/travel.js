function sendForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;

    if (name === "" || email === "" || interest === "Select option") {
        alert("Please fill all fields before submitting.");
        return;
    }

    alert(`Thanks ${name}, our sales team will contact you via ${email} within 1x24 hours.`);
}