import React, { useEffect } from 'react';

const ChangeText: React.FC = () => {
  useEffect(() => {
    const changeText = () => {
      const words = Array.from(document.querySelectorAll<HTMLElement>('.word'));
      if (words.length === 0) return;

      let currentWordIndex = 0;
      const maxWordIndex = words.length - 1;

      words[currentWordIndex].style.opacity = '1';

      const updateText = () => {
        const currentWord = words[currentWordIndex];
        const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
          setTimeout(() => {
            (letter as HTMLElement).className = 'letter out';
          }, i * 80);
        });

        nextWord.style.opacity = '1';
        Array.from(nextWord.children).forEach((letter, i) => {
          (letter as HTMLElement).className = 'letter behind';
          setTimeout(() => {
            (letter as HTMLElement).className = 'letter in';
          }, 340 + i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      };

      updateText();
      const interval = setInterval(updateText, 3000);

      return () => clearInterval(interval);
    };

    const words = document.querySelectorAll<HTMLElement>('.word');
    words.forEach((word) => {
      const letters = word.textContent?.split('') || [];
      word.textContent = '';
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
      });
    });

    changeText();
  }, []);

  return null; // Este componente apenas gerencia a lógica, sem renderizar elementos diretamente
};

export default ChangeText;
