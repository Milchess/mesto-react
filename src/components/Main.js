import React from "react";
import api from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch(err => {
                console.log(`Ошибка.....: ${err}`)
            });
    }, [])

    return (
        <div className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={props.onEditAvatar}>
                    <img alt="аватар пользователя" className="profile__avatar" src={currentUser.avatar}/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">{currentUser.name}</h1>
                    <button aria-label="Редактировать" className="profile__edit-button" id="edit-button" type="button"
                            onClick={props.onEditProfile}/>
                    <p className="profile__user-vocation">{currentUser.about}</p>
                </div>
                <button aria-label="Добавить" className="profile__add-button" id="add-button" type="button" onClick={props.onAddPlace}/>
            </section>
            <section className="elements">
                <ul className="grid-cards">
                    {cards.map((item) => {
                        return (<Card card={item} key={item._id} onCardClick={props.onCardClick}/>
                        )
                    })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Main;