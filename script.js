document.querySelector('.show-details').addEventListener('click', function() {
    var details = this.previousElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        this.textContent = "Detayları Gizle";
    } else {
        details.style.display = "none";
        this.textContent = "Detayları Gör";
    }
});