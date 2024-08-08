import { useEffect, useRef } from 'react';
import './MouseAura.scss';

const MouseAura = () => {
  const auraRef = useRef(null);

  useEffect(() => {
    const updateAuraPosition = (e) => {
      if (auraRef.current) {
        auraRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        auraRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('pointermove', updateAuraPosition);

    return () => {
      window.removeEventListener('pointermove', updateAuraPosition);
    };
  }, []);

  return <div ref={auraRef} className="mouse-aura" />;
};

export default MouseAura;
