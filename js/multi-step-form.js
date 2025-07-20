// const form = document.getElementById('multiStepForm');
// const step1 = document.getElementById('step1');
// const step2 = document.getElementById('step2');
// const nextBtn = document.getElementById('nextBtn');

// const selections = {};

// // Обработка кнопок выбора
// document.querySelectorAll('.calculate__button-group').forEach(group => {
//     group.addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') {
//             const name = group.dataset.name;
//             selections[name] = e.target.textContent;

//             // визуальная активность
//             [...group.children].forEach(btn => btn.classList.remove('active'));
//             e.target.classList.add('active');

//             // убираем подсветку ошибки, если выбрано
//             group.classList.remove('error');
//         }
//     });
// });

// // Переход ко второму шагу с валидацией
// nextBtn.addEventListener('click', () => {
//     const requiredFields = ['workType', 'roofType', 'objectType', 'roofSize'];
//     let isValid = true;

//     requiredFields.forEach(field => {
//         const group = document.querySelector(`.calculate__button-group[data-name="${field}"]`);
//         if (!selections[field]) {
//             group.classList.add('error'); // подсветим
//             isValid = false;
//         } else {
//             group.classList.remove('error'); // на случай повторной проверки
//         }
//     });

//     if (isValid) {
//         step1.style.display = 'none';
//         step2.style.display = 'flex';
//     } else {
//         alert('Пожалуйста, выберите варианты во всех разделах.');
//     }
// });

// // Отправка формы
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     for (const key in selections) {
//         formData.append(key, selections[key]);
//     }

//     for (let [key, value] of formData.entries()) {
//         console.log(key + ': ' + value);
//     }

//     // Тут можно добавить отправку на сервер с fetch(...)
// });

const form = document.getElementById('multiStepForm');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const nextBtn = document.getElementById('nextBtn');

const selections = {};
const requiredFields = ['workType', 'roofType', 'objectType', 'roofSize'];

const isMobile = () => window.innerWidth < 768;

// === Обработка кнопок выбора (для десктопа) ===
document.querySelectorAll('.calculate__button-group').forEach(group => {
    group.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const name = group.dataset.name;
            selections[name] = e.target.textContent;

            [...group.children].forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            group.classList.remove('error');
        }
    });
});

// === Переход ко второму шагу с валидацией ===
nextBtn.addEventListener('click', () => {
    let isValid = true;

    requiredFields.forEach(field => {
        const group = document.querySelector(`.calculate__button-group[data-name="${field}"]`);
        const select = document.querySelector(`select[name="${field}"]`);

        if (isMobile()) {
            if (!select.value) {
                select.classList.add('error');
                isValid = false;
            } else {
                select.classList.remove('error');
                selections[field] = select.value;
            }
        } else {
            if (!selections[field]) {
                group.classList.add('error');
                isValid = false;
            } else {
                group.classList.remove('error');
            }
        }
    });

    if (isValid) {
        step1.style.display = 'none';
        step2.style.display = 'flex';
    } else {
        alert('Пожалуйста, выберите варианты во всех разделах.');
    }
});

// === Отправка формы ===
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    for (const key in selections) {
        formData.append(key, selections[key]);
    }

    // Вывод данных в консоль (можно заменить на fetch при необходимости)
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Пример отправки:
    // fetch('/send.php', {
    //     method: 'POST',
    //     body: formData,
    // }).then(response => {
    //     if (response.ok) {
    //         alert("Форма отправлена!");
    //     } else {
    //         alert("Ошибка при отправке.");
    //     }
    // });
});
