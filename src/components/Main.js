import React from "react";

function Main() {
    return (
        <div className="content">
            <section className="profile">
                <button className="profile__avatar-button">
                    <img alt="аватар пользователя" className="profile__avatar" src="src/components/App#"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">Ваше имя</h1>
                    <button aria-label="Редактировать" className="profile__edit-button" id="edit-button" type="button"></button>
                    <p className="profile__user-vocation">Ваш род деятельности</p>
                </div>
                <button aria-label="Добавить" className="profile__add-button" id="add-button" type="button"></button>
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