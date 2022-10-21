import React from "react";

function ImagePopup(props) {
    return (
        <div className={`popup popup-card ${props.card ? "popup_opened" : ""}`} id="popup-card-image">
            <figure className="popup-card__container">
                <button aria-label="Закрыть" className="popup__button-close" id="popup-close-card__image_big" type="button"
                        onClick={props.onClose}></button>
                <img alt={props.card.name} className="popup-card__image" src={props.card.link}/>
                <figcaption className="popup-card__title">{props.card.name}</figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup;