import { useEffect } from 'react';
import '../index.css'

export const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
        const cursorLight = document.querySelector('.cursor-light');
        const cursorDot = document.querySelector('.cursor-dot');
    
        document.addEventListener('mousemove', (e) => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
          cursorLight.style.left = `${e.clientX}px`;
          cursorLight.style.top = `${e.clientY}px`;
          cursorDot.style.left = `${e.clientX}px`;
          cursorDot.style.top = `${e.clientY}px`;
        });
      }, []);
    
      return (
        <div className="custom-cursor">
          <div className="cursor-light"></div>
          <div className="cursor-dot"></div>
        </div>
      );
}
