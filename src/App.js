import Header from './components/header';
import Footer from './components/Footer';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMessages, setShowMessages] = useState(false);
  const [message,  setMessage] = useState('');
  const [message2,  setMessage2] = useState('');
  
  const handleImageClick = async () => {
    setShowMessages(true);

    try {
      const response = await fetch('http://localhost:3001');
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error('Error al obtener el mensaje:', error);
    }

    try {
      const response = await fetch('http://localhost:3001/mensaje2');
      const text = await response.text();
      setMessage2(text);
    } catch (error) {
      console.error('Error al obtener el mensaje:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <h2>¿Quién es Moo Deng?</h2>
          <p>Es importante conocer al hipopótamo pigmeo.</p>
        </section>

        
        <div className="image-and-messages">

          {showMessages && <p className="message-left">{message}</p>}
            <nav className="imagen-centrada">
              <ul>
               <li>
                <a href="#imagen" onClick={handleImageClick}>
                  <img src="/images/moodengpic.jpg" alt="Imagen de Moo Deng"/>
                </a>
                </li>
              </ul>
            </nav>

          {showMessages && <p className="message-right">{message2}</p>}

        </div>


        <section id="info">
          <h2>¿Quieres saber más?</h2>
          <p>Haz click en la imagen.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
