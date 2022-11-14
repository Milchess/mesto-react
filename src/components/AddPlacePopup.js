import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="card"
            title="Новое место"
            buttonText="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
            <input className="popup__user popup__user_type_denomination" maxLength="30" minLength="2" name="name"
                   placeholder="Название" required
                   type="text" ref={nameRef}/>
            <span className="popup__error name-error"></span>
            <input className="popup__user popup__user_type_link-image" name="link" placeholder="Ссылка на картинку" required
                   type="url" ref={linkRef}/>
            <span className="popup__error link-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;