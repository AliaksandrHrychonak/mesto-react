import avatar from '../images/avatar.png';
import React from 'react';

function Main () {
  function handleEditProfileClick () {
    document.querySelector('.profile__button-edit').addEventListener('click', () => {
      document.querySelector('.popup_type_profile').classList.add('popup_opened')
    })
  }
  function handleAddPlaceClick () {
    document.querySelector('.profile__button-add').addEventListener('click', () => {
      document.querySelector('.popup_type_card').classList.add('popup_opened')
    })
  }
  function handleEditAvatarClick () {
    document.querySelector('.profile__avatar-edit').addEventListener('click', () => {
      document.querySelector('.popup_type_avatar').classList.add('popup_opened')
    })
  }
  return (
    <main className="main">
    <section className="profile">
      <div className="profile__item">
        <div className="profile__section">
          <img className="profile__avatar" src={avatar} alt="Фото профиля" />
          <div className="profile__avatar-edit" onClick={handleEditAvatarClick}></div>
        </div>        
        <div className="profile__info">
          <h1 className="profile__info-title">error eslint</h1>
          <button className="profile__button-edit" type="button" name="Edit" aria-label="Редактировать" onClick={handleEditProfileClick} ></button>
          <p className="profile__info-subtitle"></p>
        </div>
      </div>
      <div className="profile__item">
        <button className="profile__button-add" type="button" name="Add" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
      </div>
    </section>
    <section className="elements">
      <div className="elements__item">
        
      </div>
    </section>
  </main>
  )
}

export default Main