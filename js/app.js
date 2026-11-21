
const list = document.querySelector("#list");

const addStyleButton = document.querySelector("#addStyle");
const removeStyleButton = document.querySelector("#removeStyle");
const toggleStyleButton = document.querySelector("#toggleStyle");
const flexCardsButton = document.querySelector("#flexCards");
const showPhotoButton = document.querySelector("#showPhoto");
const moreAboutButton = document.querySelector("#moreAbout");

console.log("Блок знайдено:", list);
console.log("Кнопки знайдено:", true);

// Додати стиль
addStyleButton.addEventListener("click", () => {
    list.classList.add("add");
});

// Прибрати стиль
removeStyleButton.addEventListener("click", () => {
    list.classList.remove("add");
});

// Перемкнути стиль
toggleStyleButton.addEventListener("click", () => {
    list.classList.toggle("add");
});

// Розкласти картки
flexCardsButton.addEventListener("click", () => {
    const cards = document.querySelectorAll(".add1");

    cards.forEach((card) => {
        card.classList.add("flex");
    });

    list.classList.toggle("flex-layout");
});

// Показати фото
showPhotoButton.addEventListener("click", () => {
    let photo = document.querySelector("#myPhoto");

    if (photo) {
        photo.remove();
        return;
    }

    photo = document.createElement("img");
    photo.id = "myPhoto";
    photo.src = "photo.jpg";
    photo.alt = "Моє фото";
    photo.classList.add("img");

    list.appendChild(photo);
});

// Більше про мене
moreAboutButton.addEventListener("click", () => {
    let info = document.querySelector("#extraInfo");

    if (info) {
        info.remove();
        return;
    }

    info = document.createElement("div");
    info.id = "extraInfo";
    info.classList.add("p");

    const heading = document.createElement("h3");
    heading.textContent = "Трохи більше про мене";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Я хочу розвиватися, вивчати програмування та дізнаватися більше про комп'ютерні технології.";

    const link = document.createElement("a");
    link.href = "https://github.com/";
    link.textContent = "Мій GitHub";
    link.target = "_blank";

    info.appendChild(heading);
    info.appendChild(paragraph);
    info.appendChild(link);

    list.appendChild(info);
});
