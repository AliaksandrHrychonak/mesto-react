
function PopupWithForm () {
  return (
    <>
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__form_profile" name="popup-form-profile" noValidate>
            <div className="popup__input-container">
              <input className="popup__input popup__input_value_name" name="name" id="name-profile" type="text" value="Жак-Ив Кусто" placeholder="Имя" minLength="2" maxLength="30" required/>
              <p id="name-profile-error" className="error"></p>
            </div>
            <div className="popup__input-container">
              <input className="popup__input popup__input_value_job" name="info" id="job-profile" type="text" value="Исследователь океана" placeholder="Профессия" minLength="2" maxLength="200" required/>
              <p id="job-profile-error" className="error"></p>
            </div> 
            <button className="popup__button-save popup__button-save-profile" type="submit" name="Save" aria-label="Сохранить">Сохранить</button>
          </form>
          <button className="popup__button-close popup__button-close_profile" type="button" name="Close" aria-label="Закрыть"></button>
        </div>
      </div>

      <div className="popup popup_type_card">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
            <form className="popup__form popup__form_card" name="popup-form-card" noValidate>
              <div className="popup__input-container">
                <input className="popup__input popup__input_value_title" id="title-card" name="name" type="text" value="" placeholder="Название" minLength="2" maxLength="30" required/>
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
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__button-close popup__button-close_confirm" type="button" name="Close" aria-label="Закрыть"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form popup__form_avatar" name="popup-form-avatar" noValidate>
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
  </>
  )
}

export default PopupWithForm