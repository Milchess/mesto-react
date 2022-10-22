import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInformation(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);

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
                    <img alt="аватар пользователя" className="profile__avatar" src={userAvatar}/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">{userName}</h1>
                    <button aria-label="Редактировать" className="profile__edit-button" id="edit-button" type="button"
                            onClick={props.onEditProfile}/>
                    <p className="profile__user-vocation">{userDescription}</p>
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