import React from "react";

function Card(props) {
    return (
        <li className="grid-card">
            <article className="grid-card__container">
                <button aria-label="Удалить" className="grid-card__delete" type="button"></button>
                <img alt={props.card.name} className="grid-card__image" src={props.card.link}/>
                <div className="grid-card__item">
                    <h2 className="grid-card__title">{props.card.name}</h2>
                    <div>
                        <button aria-label="Лайк" className="grid-card__like" type="button"></button>
                        <p className="grid-card__like-quantity">{props.card.likes.length}</p>
                    </div>
                </div>
            </article>
        </li>
    )
}

export default Card;