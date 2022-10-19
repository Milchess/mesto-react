import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
      <>
          <Header />
          <Main />
          <Footer />
      <div className="popup" id="popup-profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="popup-form-profile" noValidate>
            <input className="popup__user popup__user_type_name" maxLength="40" minLength="2" name="name" placeholder="Имя" required type="text"/>
              <span className="popup__error name-error"></span>
              <input className="popup__user popup__user_type_vocation" maxLength="200" minLength="2" name="about" placeholder="Род деятельности"
                     required
                     type="text"/>
                <span className="popup__error about-error"></span>
                <button className="popup__submit" id="popup__submit" type="submit">Сохранить</button>
          </form>
          <button aria-label="Закрыть" className="popup__button-close" id="popup-close-profile" type="button"></button>
        </div>
      </div>
      <div className="popup" id="popup-card">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" name="popup-form-card" noValidate>
            <input className="popup__user popup__user_type_denomination" maxLength="30" minLength="2" name="name" placeholder="Название" required
                   type="text"/>
              <span className="popup__error name-error"></span>
              <input className="popup__user popup__user_type_link-image" name="link" placeholder="Ссылка на картинку" required type="url"/>
                <span className="popup__error link-error"></span>
                <button className="popup__submit" id="popup__create" type="submit">Создать</button>
          </form>
          <button aria-label="Закрыть" className="popup__button-close" id="popup-close-card" type="button"></button>
        </div>
      </div>
      <div className="popup popup-card" id="popup-card-image">
        <figure className="popup-card__container">
          <button aria-label="Закрыть" className="popup__button-close" id="popup-close-card__image_big" type="button"></button>
          <img alt="Картинка" className="popup-card__image" src="src/components/App#"/>
          <figcaption className="popup-card__title">Подпись к картинке</figcaption>
        </figure>
      </div>
      <div className="popup" id="popup-avatar">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" name="popup-form-avatar" noValidate>
            <input className="popup__user popup__user_type_avatar" name="avatar" placeholder="Ссылка на картинку" required type="url"/>
              <span className="popup__error avatar-error"></span>
              <button className="popup__submit" id="popup__avatar-sub" type="submit">Сохранить</button>
          </form>
          <button aria-label="Закрыть" className="popup__button-close" id="popup-close-avatar" type="button"></button>
        </div>
      </div>
      <div className="popup" id="popup-delete_card">
        <div className="popup__container">
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="popup__form" name="popup-form-delete-card">
            <button className="popup__submit" id="popup__delete_card" type="submit">Да</button>
          </form>
          <button aria-label="Закрыть" className="popup__button-close" id="popup-close-delete-card" type="button"></button>
        </div>
      </div>
      </>
        </div>
      </div>
    </div>
  );
}

export default App;
