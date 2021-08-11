
import '../index.css';
import React from 'react';
import Header from "./Header.js";
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
function App() {
  return (
    <div className="page">

    <Header />
    <Main />
    <Footer />
    <PopupWithForm />
    <ImagePopup />
   
    
    
    <template className="template">
      <div className="elements__card">
        <button type="button" className="elements__button-delete"></button>
        <img src="#" alt="#" className="elements__image"/>
        <div className="elements__information">
          <h2 className="elements__title">error eslint</h2>
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
