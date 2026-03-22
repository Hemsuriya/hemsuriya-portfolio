import { useEffect } from "react";

function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "300px";
    glow.style.height = "300px";
    glow.style.borderRadius = "50%";
    glow.style.background = "rgba(56,189,248,0.2)";
    glow.style.pointerEvents = "none";
    glow.style.filter = "blur(100px)";
    glow.style.zIndex = "999"; // 🔥 FIX (was behind before)
    glow.style.mixBlendMode = "screen"; // 🔥 makes glow visible

    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX - 150 + "px";
      glow.style.top = e.clientY - 150 + "px";
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return null;
}

export default CursorGlow;