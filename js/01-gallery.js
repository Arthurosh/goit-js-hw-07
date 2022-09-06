import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const galleryEl = galleryMarkup(galleryItems);
// console.log(galleryItems);

container.insertAdjacentHTML("beforeend", galleryEl);
container.addEventListener("click", onClick);

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onClick(elm) {
  elm.preventDefault();
  const isGalleryEl = elm.target.dataset.source;
  if (!isGalleryEl) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${isGalleryEl}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", listener);

  function listener(elm) {
    if (elm.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", listener);
    }
  }
}

// if ("loading" in HTMLImageElement.prototype) {
//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');
//   lazyImages.forEach((img) => {
//     img.src = img.dataset.src;
//   });
// } else {
//   const script = document.createElement("script");
//   script.src =
//     "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
//   script.integrity =
//     "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
//   script.crossorigin = "anonymous";
//   script.referrerpolic = "no-referrer";

//   document.body.appendChild(script);
// }
