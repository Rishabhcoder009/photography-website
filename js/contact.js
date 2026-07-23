emailjs.init({
    publicKey: "Zng7wZGiCvG7Piegf"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_rabfgwk",
        "template_j5xbd24",
        this
    )

    .then(function () {

        alert("✅ Inquiry sent successfully!");

        form.reset();

    })

    .catch(function (error) {

        alert("❌ Failed to send inquiry.");

        console.log(error);

    });

});
