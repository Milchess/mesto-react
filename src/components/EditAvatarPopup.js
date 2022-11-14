import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
            <input
                className="popup__user popup__user_type_avatar"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
                type="url"
                ref={avatarRef}/>
            <span className="popup__error avatar-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;