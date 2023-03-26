import { galleryItems } from "./gallery-items.js";
// Change code below this line

const [galleryRef] = document.getElementsByClassName("gallery");

const addItemToGallery = (arr) =>
	arr.reduce(
		(acc, { preview, original, description }) =>
			acc +
			`
			<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
      </li>
			`,
		""
	);

galleryRef.innerHTML = addItemToGallery(galleryItems);

const openOriginalItem = (e) => {
	e.preventDefault();

	const instance = basicLightbox.create(
		`
			<img src="${e.target.dataset.source}">
		`
	);
	instance.show();

	const closedButtonOfModalWindow = (e) => {
		if (e.code === "Escape") instance.close();
	};

	document.addEventListener("keydown", closedButtonOfModalWindow);
};

galleryRef.addEventListener("click", openOriginalItem);
