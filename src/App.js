import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [imageSrc, setImageSrc] = useState('./imgs/default.png');

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (clientX < windowWidth / 3 && clientY < windowHeight / 3) {
      setImageSrc('./imgs/up-left.png'); // top left
    } else if (clientX >= windowWidth / 3 && clientX < windowWidth / 3 * 2 && clientY < windowHeight / 3) {
      setImageSrc('./imgs/up.png'); // top center
    } else if (clientX >= windowWidth / 3 * 2 && clientY < windowHeight / 3) {
      setImageSrc('./imgs/up-right.png'); // top right
    } else if (clientX < windowWidth / 3 && clientY >= windowHeight / 3 && clientY < windowHeight / 3 * 2) {
      setImageSrc('./imgs/left.png'); // middle left
    } else if (clientX >= windowWidth / 3 && clientX < windowWidth / 3 * 2 && clientY >= windowHeight / 3 && clientY < windowHeight / 3 * 2) {
      setImageSrc('./imgs/right.png'); // middle center
    } else if (clientX >= windowWidth / 3 * 2 && clientY >= windowHeight / 3 && clientY < windowHeight / 3 * 2) {
      setImageSrc('./imgs/right.png'); // middle right
    } else if (clientX < windowWidth / 3 && clientY >= windowHeight / 3 * 2) {
      setImageSrc('./imgs/down-left.png'); // bottom left
    } else if (clientX >= windowWidth / 3 && clientX < windowWidth / 3 * 2 && clientY >= windowHeight / 3 * 2) {
      setImageSrc('./imgs/down.png'); // bottom center
    } else {
      setImageSrc('./imgs/down-right.png'); // bottom right
    }
  };
  return (
    <div className='App' onMouseMove={handleMouseMove}>
      <img src={imageSrc}  alt=''/>
    </div>
  )
}

export default App