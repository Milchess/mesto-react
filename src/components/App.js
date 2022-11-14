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
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePlacePopup from "./ConfirmDeletePlacePopup";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
    const [currentUser, setCurrentUser] = React.useState('');

    const [cards, setCards] = React.useState([]);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
    const [card, setCard] = React.useState(null);

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch(err => {
                console.log(`Ошибка.....: ${err}`)
            });
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch(err => {
            console.log(`Ошибка.....: ${err}`)
        });
    }

    function handleCardDelete(card) {
        api.setDeleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
                closeAllPopups();
            }).catch(err => {
            console.log(`Ошибка.....: ${err}`)
        });

    }

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

    function handleConfirmPopupClick(card) {
        setCard(card);
        setIsConfirmPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsConfirmPopupOpen(false);
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

    function handleAddPlaceSubmit(item) {
        api.setCreateCard(item)
            .then((newCard) => {
                setCards([newCard, ...cards]);
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
                        onCardLike={handleCardLike}
                        onCardDelete={handleConfirmPopupClick}
                        cards={cards}
                    />

                    <Footer/>

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

                    <ConfirmDeletePlacePopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} onConfirmDelete={handleCardDelete} card={card}/>

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
