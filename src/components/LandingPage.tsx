
import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [cidade, setCidade] = useState('sua cidade');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setCidade(data.city || 'sua cidade');
      })
      .catch(() => {
        setCidade('sua cidade');
      });
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-content">
        {/* Header com nome e foto de perfil */}
        <div className="header-section">
          <img 
            src="/lovable-uploads/43bf2bf1-28ed-4816-8b19-d98ead205c77.png" 
            alt="Letícia" 
            className="model-photo"
          />
          <h1 className="model-name">
            💜 Letícia, sua companhia especial de <span className="cidade-highlight">Peruíbe</span>
          </h1>
        </div>

        {/* Galeria de fotos */}
        <div className="photo-gallery">
          <img 
            src="/lovable-uploads/58233c5b-b479-4811-953c-ca060759aeef.png" 
            alt="Letícia" 
            className="gallery-photo"
          />
          <img 
            src="/lovable-uploads/9973fd27-30f2-4ada-8c2d-5c32c624162d.png" 
            alt="Letícia" 
            className="gallery-photo"
          />
          <img 
            src="/lovable-uploads/71fdaff5-690a-4771-af11-1810f1402b52.png" 
            alt="Letícia" 
            className="gallery-photo"
          />
        </div>

        {/* Texto principal */}
        <div className="main-text">
          <p className="intro-text">
            Olá querido, sou a Letícia, uma acompanhante especial aqui de <span className="cidade-highlight">Peruíbe</span>... Estou procurando por alguém especial para momentos únicos. 😈
          </p>
          
          <p className="teaser-text">
            Procura por uma companhia diferenciada e discreta? Então você encontrou a pessoa certa...
          </p>
          
          <p className="call-text">
            Entre em contato comigo pelo WhatsApp para conversarmos melhor e combinarmos nosso encontro…
          </p>
          
          <p className="final-text">
            Quero ser tua vadia hoje ainda
          </p>
        </div>

        {/* Botão WhatsApp */}
        <div className="cta-section">
          <a 
            href="https://wa.me/55999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            💬 Conversar no WhatsApp
          </a>
        </div>

        {/* Texto adicional */}
        <div className="footer-text">
          <p>
            Estou online agora
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
