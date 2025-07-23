document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const successPopup = document.getElementById("successPopup");

    // Открытие (вставьте это в обработчик на кнопку "Сделать расчет")
    document.querySelectorAll(".services__big-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            popup.style.display = "flex";
        });
    });

    // Закрытие
    document.getElementById("popupClose").addEventListener("click", () => {
        popup.style.display = "none";
    });

    document.getElementById("successClose").addEventListener("click", () => {
        successPopup.style.display = "none";
    });

    // Отправка формы
    document.querySelector(".popup__form").addEventListener("submit", function (e) {
        e.preventDefault();
        popup.style.display = "none";
        successPopup.style.display = "flex";
        this.reset();
    });
});
