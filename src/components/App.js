import '../index.css';
import React from 'react';
import { Header } from "./Header.js";
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup'

export function App () {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
      setEditProfilePopupOpen(true)
  };

  const handleAddPlaceClick = () => {
      setAddPlacePopupOpen(true)
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}  onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen} onClose ={closeAllPopups} >
        <div className="popup__input-container">
          <input className="popup__input popup__input_value_name" name="name" id="name-profile" type="text" defaultValue="" placeholder="Имя" minLength="2" maxLength="30" required />
          <p id="name-profile-error" className="error"></p>
        </div>
        <div className="popup__input-container">
          <input className="popup__input popup__input_value_job" name="info" id="job-profile" type="text" defaultValue="" placeholder="Профессия" minLength="2" maxLength="200" required />
          <p id="job-profile-error" className="error"></p>
        </div> 
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
        <div className="popup__input-container">
          <input className="popup__input popup__input_value_title" id="title-card" name="name" type="text" defaultValue="" placeholder="Название" minLength="2" maxLength="30" required />
          <p id="title-card-error" className="error"></p>
        </div>
        <div className="popup__input-container">
          <input className="popup__input popup__input_value_image" id="link-card" name="image" type="url" defaultValue="" placeholder="Ссылка на картинку" required />
          <p id="link-card-error" className="error"></p>
        </div>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="CardDelete" />
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input className="popup__input popup__input_value_avatar" id="avatar-card" name="avatar" type="url" defaultValue="" placeholder="Ссылка" required />
          <p id="avatar-card-error" className="error"></p>
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} /> 
    </div>
  );
}

