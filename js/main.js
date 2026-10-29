
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("productSearch");
    const products = document.querySelectorAll(
        "#departments article, .category-card"
    );
    const searchMessage = document.getElementById("searchMessage");

    if (!searchInput) return;

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
        
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("closeLightbox");
    const galleryImages = document.querySelectorAll(".gallery-image");

    if (!lightbox || !lightboxImage || !closeButton) return;

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
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
});

    });
});
