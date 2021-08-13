import React from "react"; 

export function Card ({ card, onCardClick }) {

  const handleClick = () => {
    onCardClick(card);
  }  

  return(
    <div className="template">
      <div className="elements__card">
        <button type="button" className="elements__button-delete"></button>
        <img src={card.image} alt={card.name} className="elements__image" onClick={handleClick} />
        <div className="elements__information"> 
          <h2 className="elements__title">{card.name}</h2>
          <div className="elements__container-like">
            <button className="elements__button-like" type="button" name="Like" aria-label="Like"></button>
            <p className="elements__quantity">{card.likes.length}</p> 
          </div>
        </div>
      </div>
    </div>
  )
}
