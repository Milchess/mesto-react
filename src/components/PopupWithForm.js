import React from "react"

function PopupWithForm({isOpen, onClose, name, title, buttonText, children}) {
    return (
        <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <h3 className="popup__title">{title}</h3>
                <form className="popup__form" name={`popup-form-${name}`}>
                    {children}
                    <button className="popup__submit" type="submit">{buttonText}</button>
                </form>
                <button aria-label="Закрыть" className="popup__button-close" type="button" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default PopupWithForm;
