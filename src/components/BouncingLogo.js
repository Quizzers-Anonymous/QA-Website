import React, { useEffect, useRef } from "react";
import logo from "./bounce.png";

const BouncingLogo = () => {
  const logoRef = useRef(null);
  const positionRef = useRef({ x: 100, y: 100 });
  const velocityRef = useRef({ dx: 1.1, dy: 1.1 });
  const frameRef = useRef(null);

  useEffect(() => {
    const logoEl = logoRef.current;
    if (!logoEl) return;

    const parentEl = logoEl.parentElement;
    let logoWidth = 0;
    let logoHeight = 0;
    let parentWidth = 0;
    let parentHeight = 0;

    const updateBounds = () => {
      logoWidth = logoEl.offsetWidth;
      logoHeight = logoEl.offsetHeight;
      parentWidth = parentEl ? parentEl.clientWidth : window.innerWidth;
      parentHeight = parentEl ? parentEl.clientHeight : window.innerHeight;
    };

    updateBounds();

    const tick = () => {
      const pos = positionRef.current;
      const velocity = velocityRef.current;

      let nextX = pos.x + velocity.dx;
      let nextY = pos.y + velocity.dy;

      if (nextX <= 0 || nextX + logoWidth >= parentWidth) {
        velocity.dx = -velocity.dx;
        nextX = Math.max(0, Math.min(nextX, parentWidth - logoWidth));
      }

      if (nextY <= 0 || nextY + logoHeight >= parentHeight) {
        velocity.dy = -velocity.dy;
        nextY = Math.max(0, Math.min(nextY, parentHeight - logoHeight));
      }

      positionRef.current = { x: nextX, y: nextY };
      logoEl.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={logoRef}
      src={logo}
      alt="Bouncing Logo"
      className="absolute w-20 h-20 pointer-events-none z-10"
      style={{
        transform: "translate3d(100px, 100px, 0)",
        willChange: "transform",
      }}
    />
  );
};

export default BouncingLogo;
