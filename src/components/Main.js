import React from "react";
import PopupWithForm from "./PopupWithForm";

function Main() {
    return (
        <div className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={handleEditAvatarClick}>
                    <img alt="аватар пользователя" className="profile__avatar" src="src/components/App#"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">Ваше имя</h1>
                    <button aria-label="Редактировать" className="profile__edit-button" id="edit-button" type="button" onClick={handleEditProfileClick}></button>
                    <p className="profile__user-vocation">Ваш род деятельности</p>
                </div>
                <button aria-label="Добавить" className="profile__add-button" id="add-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="elements">
                <ul className="grid-cards">
                    <template id="grid-card-template">
                        <li className="grid-card">
                            <article className="grid-card__container">
                                <button aria-label="Удалить" className="grid-card__delete" type="button"></button>
                                <img alt="Картинка" className="grid-card__image" src="src/components/App#"/>
                                <div className="grid-card__item">
                                    <h2 className="grid-card__title">Подпись к картинке</h2>
                                    <div>
                                        <button aria-label="Лайк" className="grid-card__like" type="button"></button>
                                        <p className="grid-card__like-quantity"></p>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </template>
                </ul>
            </section>

            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                buttonText="Сохранить">
                <input className="popup__user popup__user_type_name" maxLength="40" minLength="2" name="name" placeholder="Имя" required type="text"/>
                <span className="popup__error name-error"></span>
                <input className="popup__user popup__user_type_vocation" maxLength="200" minLength="2" name="about" placeholder="Род деятельности"
                       required
                       type="text"/>
                <span className="popup__error about-error"></span>
            </PopupWithForm>

            <PopupWithForm
                name="card"
                title="Новое место"
                buttonText="Создать">
                <input className="popup__user popup__user_type_denomination" maxLength="30" minLength="2" name="name" placeholder="Название" required
                       type="text"/>
                <span className="popup__error name-error"></span>
                <input className="popup__user popup__user_type_link-image" name="link" placeholder="Ссылка на картинку" required type="url"/>
                <span className="popup__error link-error"></span>
            </PopupWithForm>

            <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить">
                <input className="popup__user popup__user_type_avatar" name="avatar" placeholder="Ссылка на картинку" required type="url"/>
                <span className="popup__error avatar-error"></span>
            </PopupWithForm>

            <PopupWithForm
            name="delete_card"
            title="Вы уверены?"
            buttonText="Да">
            </PopupWithForm>

            <div className="popup popup-card" id="popup-card-image">
                <figure className="popup-card__container">
                    <button aria-label="Закрыть" className="popup__button-close" id="popup-close-card__image_big" type="button"></button>
                    <img alt="Картинка" className="popup-card__image" src="src/components/App#"/>
                    <figcaption className="popup-card__title">Подпись к картинке</figcaption>
                </figure>
            </div>
        </div>
    )
}

    function handleEditAvatarClick() {
        const avatar = document.querySelector('.popup-avatar');
        avatar.classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        const profile = document.querySelector('.popup-profile');
        profile.classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        const place = document.querySelector('.popup-card');
        place.classList.add('popup_opened');
    }

export default Main;