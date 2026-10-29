
document.addEventListener("DOMContentLoaded", function () {

    // PRODUCT SEARCH
    const searchInput = document.getElementById("productSearch");
    const products = document.querySelectorAll(
        "#departments article, .category-card"
    );
    const searchMessage = document.getElementById("searchMessage");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase().trim();
            let visibleCount = 0;

            products.forEach(function (product) {
                const matches = product.textContent
                    .toLowerCase()
                    .includes(searchTerm);

                product.style.display = matches ? "" : "none";

                if (matches) {
                    visibleCount++;
                }
            });

            if (searchMessage) {
                searchMessage.textContent = searchTerm === ""
                    ? ""
                    : visibleCount + " matching department(s) found.";
            }
        });
    }

    // IMAGE GALLERY AND LIGHTBOX
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("closeLightbox");
    const galleryImages = document.querySelectorAll(".gallery-image");

    if (lightbox && lightboxImage && closeButton) {

        function closeLightbox() {
            lightbox.classList.remove("active");
            lightbox.setAttribute("aria-hidden", "true");
            lightboxImage.src = "";
        }

        galleryImages.forEach(function (image) {
            image.addEventListener("click", function () {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                lightbox.classList.add("active");
                lightbox.setAttribute("aria-hidden", "false");

                closeButton.focus();
            });
        });

        closeButton.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (
                event.key === "Escape" &&
                lightbox.classList.contains("active")
            ) {
                closeLightbox();
            }
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const enquiryForm = document.getElementById("enquiryForm");
    const formMessage = document.getElementById("formMessage");

    if (!enquiryForm || !formMessage) return;

    let messageTimer;

    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        formMessage.textContent =
            "Thank you! Your enquiry has been submitted successfully.";
        formMessage.style.color = "green";

        clearTimeout(messageTimer);

        messageTimer = setTimeout(function () {
            formMessage.textContent = "";
        }, 5000);

        enquiryForm.reset();
    });
});


