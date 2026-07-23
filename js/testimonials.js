const logos = document.querySelectorAll(".client-logo");

const reviewText = document.getElementById("review-text");
const reviewName = document.getElementById("review-name");
const reviewRole = document.getElementById("review-role");

logos.forEach(logo => {

    function showReview() {

        logos.forEach(item => item.classList.remove("active"));

        logo.classList.add("active");

        reviewText.textContent = logo.dataset.review;
        reviewName.textContent = logo.dataset.name;
        reviewRole.textContent = logo.dataset.role;

    }

    // Desktop
    logo.addEventListener("mouseenter", showReview);

    // Mobile & Tablet
    logo.addEventListener("click", showReview);

});