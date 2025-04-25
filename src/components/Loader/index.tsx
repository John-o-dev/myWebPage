import React, { useEffect } from 'react';

const Loader: React.FC = () => {
  useEffect(() => {
    const container = document.createElement('div');
    const loader = document.createElement('div');

    // Configuração do container
    container.setAttribute('id', 'loading-container');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.backgroundColor = '#000';
    container.style.minWidth = '100%';
    container.style.minHeight = '100vh';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    // Configuração do loader
    loader.setAttribute('id', 'loading');
    loader.style.border = '6px solid #e5e5e5';
    loader.style.borderRadius = '50%';
    loader.style.borderTopColor = '#12f7ff';
    loader.style.height = '50px';
    loader.style.width = '50px';

    // Adiciona elementos ao DOM
    container.appendChild(loader);
    document.body.appendChild(container);

    // Animação
    const isRotating = [
      { transform: 'rotate(0)' },
      { transform: 'rotate(360deg)' },
    ];

    const rotateTiming: KeyframeAnimationOptions = {
      duration: 1000,
      iterations: Infinity,
    };

    loader.animate(isRotating, rotateTiming);

    // Cleanup
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return null;
};

export default Loader;
