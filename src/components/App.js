import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import PopupWithForm from "./PopupWithForm";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
    const [currentUser, setCurrentUser] = React.useState('');

    React.useEffect(() => {
        api.getUserInformation()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch(err => {
                console.log(`Ошибка.....: ${err}`)
            });
    }, [])

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({name: '', link: ''});
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleUpdateUser(item) {
        api.setUserUpdate(item)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch(err => {
                console.log(`Ошибка.....: ${err}`)
            });
    }

    function handleUpdateAvatar(item) {
        api.setUserAvatar(item)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch(err => {
                console.log(`Ошибка.....: ${err}`)
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__container">

                    <Header/>

                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                    />

                    <Footer/>

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

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

                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

                    <PopupWithForm
                        name="delete_card"
                        title="Вы уверены?"
                        buttonText="Да">
                    </PopupWithForm>

                    <ImagePopup
                        onClose={closeAllPopups}
                        card={selectedCard}
                    />

                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
