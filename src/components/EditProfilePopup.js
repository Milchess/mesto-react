import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const[name, setName] = React.useState('');
    const[description, setDescription] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [props.isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
    <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}>
        <input className="popup__user popup__user_type_name" maxLength="40" minLength="2" name="name" placeholder="Имя" required
               type="text" onChange={handleChangeName} value={name || ''}/>
        <span className="popup__error name-error"></span>
        <input className="popup__user popup__user_type_vocation" maxLength="200" minLength="2" name="about"
               placeholder="Род деятельности"
               required
               type="text"
               onChange={handleChangeDescription} value={description || ''}/>
        <span className="popup__error about-error"></span>
    </PopupWithForm>
)
}
export default EditProfilePopup;