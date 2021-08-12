import React from 'react';
import { api } from '../utils/api';
import { Card } from "./Card.js";

export function Main (props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar)
    })
    .catch((err) => {
      console.log(err);
    })
  });

  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(
        data.map(item => ({
          name: item.name,
          image: item.link,
          _id: item._id,
        }))
      );
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <main className="main">
    <section className="profile">
      <div className="profile__item">
        <div className="profile__section">
          <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
          <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
        </div>        
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button className="profile__button-edit" type="button" name="Edit" aria-label="Редактировать" onClick={props.onEditProfile} ></button>
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
      </div>
      <div className="profile__item">
        <button className="profile__button-add" type="button" name="Add" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </div>
    </section>
    <section className="elements">
      <div className="elements__item">
      {cards.map(card => 
          <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
        )}
      </div>
    </section>
  </main>
  )
}
