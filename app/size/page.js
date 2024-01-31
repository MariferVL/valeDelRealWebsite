"use client";
import { useState } from 'react';

export default function MyComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleClick(event) {
    // Establecer la posición absoluta del elemento
    setPosition({ x: event.pageX, y: event.pageY });
    console.log('position:' , position);
  }

  
  return (
    <div className='h-screen items-center ' onClick={handleClick}>
      <p style={{ position: 'absolute', left: position.x, top: position.y }}>
        Mi elemento
      </p>
    </div>
  );
}
