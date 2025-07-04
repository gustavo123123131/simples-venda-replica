import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white">
      {/* Seção de texto no topo */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg mb-4">
          Olá querido, sou a Letícia, uma acompanhante especial aqui de <span className="text-red-400 font-bold">Peruíbe</span>... Estou procurando por alguém especial para momentos únicos. 😈
        </p>
        
        <p className="text-lg mb-4">
          Procura por uma companhia diferenciada e discreta? Então você encontrou a pessoa certa...
        </p>
        
        <p className="text-lg mb-4">
          Entre em contato comigo pelo WhatsApp para conversarmos melhor e combinarmos nosso encontro...
        </p>
        
        <p className="text-pink-400 font-bold text-lg mb-6">
          Quero ser tua vadia hoje ainda
        </p>
        
        <a 
          href="https://wa.me/55999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
        >
          💬 Conversar no WhatsApp
        </a>
        
        <p className="text-gray-300 italic">
          Estou online agora
        </p>
      </div>

      {/* Resto do conteúdo hero original */}
      <div className="container mx-auto px-4 py-16">
        {/* Hero content with main product presentation */}
      </div>
    </div>
  );
};

export default Hero;
