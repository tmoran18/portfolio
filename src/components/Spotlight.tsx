import { useEffect, useState, useCallback } from "react";

export default function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Debounce/throttle the mouse movement updates
  const updateMousePosition = useCallback((ev: MouseEvent) => {
    // Using requestAnimationFrame for smooth performance
    window.requestAnimationFrame(() => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    });
  }, []);

  useEffect(() => {
    // Add passive listener to improve scroll performance
    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  // Memoize the gradient string to prevent unnecessary recalculations
  const gradientStyle = `radial-gradient(900px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.1125), transparent 50%)`;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 will-change-transform"
      style={{
        background: gradientStyle,
        transform: "translate3d(0, 0, 0)", // Force GPU acceleration
      }}
    />
  );
}
