import headerLogo from './images/header-logo.svg';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
      <header className="header">
        <img alt="Логотип Mesto Russia" className="header__logo" src={headerLogo}/>
      </header>
      <main className="content">
        <section className="profile">
          <button className="profile__avatar-button">
            <img alt="аватар пользователя" className="profile__avatar" src="#"/>
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
                  <img alt="Картинка" className="grid-card__image" src="#"/>
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
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy;&nbsp;2022 Mesto&nbsp;Russia</p>
      </footer>
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
          <img alt="Картинка" className="popup-card__image" src="#"/>
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
        </div>
      </div>
    </div>
  );
}

export default App;
