
function ImagePopup () {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__container-image">
        <img src="#" alt="#" className="popup__image"/>
        <button className="popup__button-close popup__button-close_image" type="button" name="Close" aria-label="Закрыть"></button>
        <figcaption className="popup__description"></figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup