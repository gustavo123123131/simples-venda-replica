
import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        {/* Botão WhatsApp no topo */}
        <div className="top-whatsapp">
          <a 
            href="https://wa.me/55999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button-top"
          >
            💬 Conversar no WhatsApp
          </a>
        </div>

        {/* Header com nome e foto de perfil */}
        <div className="header-section">
          <div className="header-content">
            <img 
              src="/lovable-uploads/43bf2bf1-28ed-4816-8b19-d98ead205c77.png" 
              alt="Letícia" 
              className="model-photo"
            />
            <div className="header-text">
              <h1 className="model-name">
                💜 Letícia, sua companhia especial
              </h1>
              <div className="header-description">
                <p className="intro-text">
                  Olá querido, sou a Letícia, uma acompanhante especial... Estou procurando por alguém especial para momentos únicos. 😈
                </p>
                <p className="teaser-text">
                  Procura por uma companhia diferenciada e discreta? Então você encontrou a pessoa certa...
                </p>
                <p className="call-text">
                  Entre em contato comigo pelo WhatsApp para conversarmos melhor e combinarmos nosso encontro…
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Galeria de fotos */}
        <div className="photo-gallery">
          <img 
            src="/lovable-uploads/3fa31933-0780-43cc-889b-621e539b0990.png" 
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
