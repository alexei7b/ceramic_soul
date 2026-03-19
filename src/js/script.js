// import "purecss/build/grids-min.css";
// import "purecss/build/grids-responsive-min.css";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";
// import "../sass/style.scss";




const burger = document.querySelector('.burger'),
    close = document.querySelector('.header__menu-close'),
    menu = document.querySelector('.header__menu');



burger.addEventListener('click', () => {
    menu.classList.add('header__menu-active'),
        document.body.style.overflow = "hidden";   /* cкрываем контент котор. выходит за пределы, чтобы scroll страницы был не активным*/
});

close.addEventListener('click', () => {
    menu.classList.remove('header__menu-active'),
        document.body.style.overflow = "";
});

try {
    new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 35
            }
        },

        modules: [Navigation, Pagination]
    });
} catch (e) { }


try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Удаляем активный класс у всех табов и контента
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            // Добавляем активный класс к нажатому табу и показываем соответствующий контент
            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    // Показываем первый контент при загрузке
    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) { }

try {
    const validator = new JustValidate('form');
    validator
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Invalid name'
            },
            {
                rule: 'minLength',
                value: 2,

            },

        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Invalid email'
            },
            {
                rule: 'email'
            },

        ])
        .addField('#question', [
            {
                rule: 'required',
                errorMessage: 'Please fill the text area'
            },
            {
                rule: 'minLength',
                value: 5,
            },

        ], {
            errorsContainer: document.querySelector('#question')
                .parentElement.querySelector('.error-message'),
        })
        .addField('#checkbox', [
            {
                rule: 'required',
                errorMessage: 'Fill the field'
            }

        ],
            {
                errorsContainer: document.querySelector('#checkbox')
                    .parentElement.parentElement.querySelector('.checkbox-error-message'),
            })
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Succes', data);
                    form.reset();
                });

        });

} catch (e) { }



try {
    const validator__footer = new JustValidate('.footer__form');
    validator__footer
        .addField('#newsletter__email', [
            {
                rule: 'required',
                errorMessage: 'Invalid email'
            },
            {
                rule: 'email'

            },

        ],
            {
                errorsContainer: document.querySelector('#newsletter__email')
                    .parentElement.querySelector('.footer-error-message'),
            })


        .addField('#footer__checkbox', [
            {
                rule: 'required',
                errorMessage: 'Fill the field'
            }

        ],
            {
                errorsContainer: document.querySelector('#footer__checkbox')
                    .parentElement.parentElement.querySelector('.footer-error-checkbox-message'),
            })
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Succes footer form', data);
                    form.reset();
                });

        });

} catch (e) { }






let result = '';
let length = 7;
let result2 = '';
let length2 = 7;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

for (let i = 0; i < length2; i++) {
    for (let j = length2 - i; j > 0; j--) {
        result2 += '*'
    }
    result2 += '\n';
}

console.log(result2)

let result3 = '';
let length3 = 7;

for (let i = 0; i < length3; i++) {
    for (let j = length3 - i; j > 0; j--) {
        result3 += ' ';
    }
    for (let k = 0; k <= i; k++) {
        result3 += "*";
    }
    result3 += '\n';
}

console.log(result3)


let result4 = '';
let length4 = 7;

for (let i = 0; i < length4; i++) {
    for (let k = 0; k <= i; k++) {
        result4 += " ";
    }
    for (let j = length4 - i; j > 0; j--) {
        result4 += '*';
    }

    result4 += '\n';
}

console.log(result4)