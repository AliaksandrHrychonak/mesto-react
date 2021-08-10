/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
    <header className="header">
      <a href="#" className="header__link" target="_blank"><img className="header__logo" src={logo} alt="Логотип"/></a>
    </header>
    <main className="main">
      <section className="profile">
        <div className="profile__item">
          <div className="profile__section">
            <img className="profile__avatar" src="#" alt="Фото профиля"/>
            <div className="profile__avatar-edit"></div>
          </div>        
          <div className="profile__info">
            <h1 className="profile__info-title"></h1>
            <button className="profile__button-edit" type="button" name="Edit" aria-label="Редактировать"></button>
            <p className="profile__info-subtitle"></p>
          </div>
        </div>
        <div className="profile__item">
          <button className="profile__button-add" type="button" name="Add" aria-label="Добавить"></button>
        </div>
      </section>
      <section className="elements">
        <div className="elements__item">
          
        </div>
      </section>
    </main>
    <footer className="footer">
      <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
    </footer>
    <div className="popup popup_type_profile">
      <div className="popup__container">
        <h3 class="popup__title">Редактировать профиль</h3>
        <form className="popup__form popup__form_profile" name="popup-form-profile" novalidate>
          <div className="popup__input-container">
            <input className="popup__input popup__input_value_name" name="name" id="name-profile" type="text" value="Жак-Ив Кусто" placeholder="Имя" minlength="2" maxlength="30" required/>
            <p id="name-profile-error" className="error"></p>
          </div>
          <div className="popup__input-container">
            <input className="popup__input popup__input_value_job" name="info" id="job-profile" type="text" value="Исследователь океана" placeholder="Профессия" minlength="2" maxlength="200" required/>
            <p id="job-profile-error" class="error"></p>
          </div> 
          <button className="popup__button-save popup__button-save-profile" type="submit" name="Save" aria-label="Сохранить">Сохранить</button>
        </form>
        <button className="popup__button-close popup__button-close_profile" type="button" name="Close" aria-label="Закрыть"></button>
      </div>
    </div>
    <div className="popup popup_type_card">
      <div className="popup__container">
        <h3 className="popup__title">Новое место</h3>
          <form className="popup__form popup__form_card" name="popup-form-card" novalidate>
            <div className="popup__input-container">
              <input className="popup__input popup__input_value_title" id="title-card" name="name" type="text" value="" placeholder="Название" minlength="2" maxlength="30" required/>
              <p id="title-card-error" className="error"></p>
            </div>
            <div className="popup__input-container">
              <input className="popup__input popup__input_value_image" id="link-card" name="image" type="url" value="" placeholder="Ссылка на картинку" required/>
              <p id="link-card-error" className="error"></p>
            </div>
            <button className="popup__button-save popup__button-save_submit_card popup__button-save_disable" disabled type="submit" name="create" aria-label="Создать">Создать</button>
          </form>
          <button className="popup__button-close popup__button-close_card" type="button" name="Close" aria-label="Закрыть"></button>
      </div>
    </div>
    <div className="popup popup_type_image">
      <figure className="popup__container-image">
        <img src="#" alt="#" className="popup__image"/>
        <button className="popup__button-close popup__button-close_image" type="button" name="Close" aria-label="Закрыть"></button>
        <figcaption className="popup__description"></figcaption>
      </figure>
    </div>
    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <button className="popup__button-close popup__button-close_confirm" type="button" name="Close" aria-label="Закрыть"></button>
        <h3 className="popup__title">Обновить аватар</h3>
        <form className="popup__form popup__form_avatar" name="popup-form-avatar" novalidate>
          <div className="popup__input-container">
            <input className="popup__input popup__input_value_avatar" id="avatar-card" name="avatar" type="url" value="" placeholder="Ссылка" required/>
            <p id="avatar-card-error" className="error"></p>
          </div>
          <button className="popup__button-save popup__button-save_submit_avatar popup__button-save_disable" disabled type="submit" name="Save" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_delete">
      <div className="popup__container">
        <button className="popup__button-close" type="button" name="Close" aria-label="Закрыть"></button>
        <h3 className="popup__title popup__title_theme_delete">Вы уверены?</h3>
        <button className="popup__button-save popup__button-save_type_delete" type="submit" name="delete" aria-label="Да">Да</button>
      </div>
    </div>
    <template className="template">
      <div className="elements__card">
        <button type="button" className="elements__button-delete"></button>
        <img src="#" alt="#" className="elements__image"/>
        <div className="elements__information">
          <h2 className="elements__title"></h2>
          <div className="elements__container-like">
            <button className="elements__button-like" type="button" name="Like" aria-label="Like"></button>
            <p className="elements__quantity"></p> 
          </div>
        </div>
      </div>
    </template>
  </div>
  );
}

export default App;
