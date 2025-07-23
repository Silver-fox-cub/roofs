document.querySelectorAll('.services-item').forEach(item => {
    item.addEventListener('click', function (e) {
        // Исключаем клик по кнопке или вложенной ссылке
        if (
            e.target.closest('.services__big-btn') ||
            e.target.closest('a')
        ) return;

        const href = this.getAttribute('data-href');
        if (href) {
            window.location.href = href;
        }
    });
});