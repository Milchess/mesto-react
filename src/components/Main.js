import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, SetUserDescription] = React.useState('');
    const [userAvatar, SetUserAvatar] = React.useState('');
    const [cards, SetCards] = React.useState([]);

    api.getUserInformation()
        .then((UserData) => {
            setUserName(UserData.name);
            SetUserDescription(UserData.about);
            SetUserAvatar(UserData.avatar);
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))

    api.getInitialCards()
        .then((cardsData) => {
            SetCards(cardsData);
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))

    return (
        <div className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={props.onEditAvatar}>
                    <img alt="аватар пользователя" className="profile__avatar" src={userAvatar}/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">{userName}</h1>
                    <button aria-label="Редактировать" className="profile__edit-button" id="edit-button" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__user-vocation">{userDescription}</p>
                </div>
                <button aria-label="Добавить" className="profile__add-button" id="add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="grid-cards">
                    {cards.map((item, id) => {
                        return <Card card={item} key={id} />
                    })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Main;