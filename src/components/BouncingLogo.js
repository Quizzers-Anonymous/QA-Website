import React, { useEffect, useRef, useState } from "react";
import logo from "./bounce.png"; // your PNG file

const BouncingLogo = () => {
  const logoRef = useRef(null);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [dir, setDir] = useState({ dx: 2, dy: 2 });

  useEffect(() => {
    const logoEl = logoRef.current;
    if (!logoEl) return;

    const interval = setInterval(() => {
      const rect = logoEl.getBoundingClientRect();
      const parentRect = logoEl.parentElement.getBoundingClientRect();

      let newX = pos.x + dir.dx;
      let newY = pos.y + dir.dy;
      let newDx = dir.dx;
      let newDy = dir.dy;

      // Bounce off edges
      if (newX <= 0 || newX + rect.width >= parentRect.width) newDx = -dir.dx;
      if (newY <= 0 || newY + rect.height >= parentRect.height) newDy = -dir.dy;

      setPos({ x: newX, y: newY });
      setDir({ dx: newDx, dy: newDy });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [pos, dir]);

  return (
    <img
      ref={logoRef}
      src={logo}
      alt="Bouncing Logo"
      className="absolute w-20 h-20 pointer-events-none z-10"
      style={{ left: pos.x, top: pos.y }}
    />
  );
};

export default BouncingLogo;
