import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup-card" id="popup-card-image">
            <figure className="popup-card__container">
                <button aria-label="Закрыть" className="popup__button-close" id="popup-close-card__image_big" type="button"></button>
                <img alt="Картинка" className="popup-card__image" src="src/components/App#"/>
                <figcaption className="popup-card__title">Подпись к картинке</figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup;