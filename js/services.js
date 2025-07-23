document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".services__tab");
    const select = document.querySelector(".services__select");
    const lists = document.querySelectorAll(".services__list");

    function switchTab(target) {
        // Активируем нужную секцию
        lists.forEach((list) => {
            list.classList.remove("active");
        });
        const targetList = document.querySelector(`.services__${target}`);
        if (targetList) {
            targetList.classList.add("active");
        }

        // Обновляем активный таб на десктопе
        tabs.forEach((tab) => {
            tab.classList.remove("active");
            if (tab.getAttribute("data-tab") === target) {
                tab.classList.add("active");
            }
        });

        // Обновляем <select> в мобильной версии
        if (select) {
            select.value = target;
        }
    }

    // Клики по табам
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab");
            switchTab(target);
        });
    });

    // Изменение select в мобильной версии
    if (select) {
        select.addEventListener("change", () => {
            switchTab(select.value);
        });
    }
});
