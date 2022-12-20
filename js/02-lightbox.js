import { galleryItems } from "./gallery-items.js";
// Change code below this line
import { makeGalleryImg } from "./01-gallery.js";

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(makeGalleryImg);
console.log(galleryItems);
