import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(".gallery");

const selectorGalleryImg = (img) => {
  return img
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href=${original}><img class= "gallery__image" src="${preview}" data-source =${original} alt="${description}"></div>`;
    })
    .join("");
};

const cardImagesMarkup = selectorGalleryImg(galleryItems);

galleryItemsEl.insertAdjacentHTML("afterbegin", cardImagesMarkup);

galleryItemsEl.addEventListener("click", selectGalleryImgEl);

function selectGalleryImgEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  const onKeydownEsc = (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  };

  window.addEventListener("keydown", onKeydownEsc);
}

console.log(galleryItems);
