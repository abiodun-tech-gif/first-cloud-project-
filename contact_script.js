document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function () {
        alert("Your message has been sent successfully!");
    });
});
