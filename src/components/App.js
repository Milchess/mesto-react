import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditAvatarPopupOpen, SetIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, SetIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, SetIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, SetSelectedCard] = React.useState(false);

    function handleEditAvatarClick() {
        SetIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        SetIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        SetIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        SetIsEditAvatarPopupOpen(false);
        SetIsEditProfilePopupOpen(false);
        SetIsAddPlacePopupOpen(false);
        SetSelectedCard(false);
    }

    function handleCardClick(card) {
        SetSelectedCard(card);
    }

    return (
        <div className="App">
            <div className="page">
                <div className="page__container">
                    <>
                        <Header/>

                        <Main
                            onEditAvatar={handleEditAvatarClick}
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onCardClick={handleCardClick}
                        />

                        <Footer/>

                        <PopupWithForm
                            name="profile"
                            title="Редактировать профиль"
                            buttonText="Сохранить"
                            isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}>
                            <input className="popup__user popup__user_type_name" maxLength="40" minLength="2" name="name" placeholder="Имя" required
                                   type="text"/>
                            <span className="popup__error name-error"></span>
                            <input className="popup__user popup__user_type_vocation" maxLength="200" minLength="2" name="about"
                                   placeholder="Род деятельности"
                                   required
                                   type="text"/>
                            <span className="popup__error about-error"></span>
                        </PopupWithForm>

                        <PopupWithForm
                            name="card"
                            title="Новое место"
                            buttonText="Создать"
                            isOpen={isAddPlacePopupOpen}
                            onClose={closeAllPopups}>
                            <input className="popup__user popup__user_type_denomination" maxLength="30" minLength="2" name="name"
                                   placeholder="Название" required
                                   type="text"/>
                            <span className="popup__error name-error"></span>
                            <input className="popup__user popup__user_type_link-image" name="link" placeholder="Ссылка на картинку" required
                                   type="url"/>
                            <span className="popup__error link-error"></span>
                        </PopupWithForm>

                        <PopupWithForm
                            name="avatar"
                            title="Обновить аватар"
                            buttonText="Сохранить"
                            isOpen={isEditAvatarPopupOpen}
                            onClose={closeAllPopups}>
                            <input className="popup__user popup__user_type_avatar" name="avatar" placeholder="Ссылка на картинку" required
                                   type="url"/>
                            <span className="popup__error avatar-error"></span>
                        </PopupWithForm>

                        <PopupWithForm
                            name="delete_card"
                            title="Вы уверены?"
                            buttonText="Да">
                        </PopupWithForm>

                        <ImagePopup
                            onClose={closeAllPopups}
                            card={selectedCard}
                        />
                    </>
                </div>
            </div>
        </div>
    );
}

export default App;
