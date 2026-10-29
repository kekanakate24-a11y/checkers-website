
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
    });
});
