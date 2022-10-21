import React from "react";
import api from "../utils/api";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, SetUserDescription] = React.useState('');
    const [userAvatar, SetUserAvatar] = React.useState('');

    api.getUserInformation()
        .then((UserData) => {
            setUserName(UserData.name);
            SetUserDescription(UserData.about);
            SetUserAvatar(UserData.avatar);
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
        </div>
    )
}

export default Main;