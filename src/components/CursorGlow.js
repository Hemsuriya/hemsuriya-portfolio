import { useEffect } from "react";

function CursorGlow() {
  useEffect(() => {
    const outer = document.createElement("div");
    const inner = document.createElement("div");

    const styleLayer = (node, size, blur, background, opacity) => {
      node.style.position = "fixed";
      node.style.width = size;
      node.style.height = size;
      node.style.borderRadius = "50%";
      node.style.background = background;
      node.style.pointerEvents = "none";
      node.style.filter = `blur(${blur})`;
      node.style.opacity = opacity;
      node.style.zIndex = "2";
      node.style.mixBlendMode = "screen";
      node.style.transition = "transform 180ms ease";
      document.body.appendChild(node);
    };

    styleLayer(
      outer,
      "340px",
      "110px",
      "radial-gradient(circle, rgba(93,231,255,0.24), rgba(109,139,255,0.08) 40%, transparent 72%)",
      "0.9"
    );
    styleLayer(
      inner,
      "160px",
      "42px",
      "radial-gradient(circle, rgba(255,191,105,0.24), rgba(93,231,255,0.12) 42%, transparent 72%)",
      "0.75"
    );

    const move = (e) => {
      outer.style.left = `${e.clientX - 170}px`;
      outer.style.top = `${e.clientY - 170}px`;
      inner.style.left = `${e.clientX - 80}px`;
      inner.style.top = `${e.clientY - 80}px`;
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(outer);
      document.body.removeChild(inner);
    };
  }, []);

  return null;
}

export default CursorGlow;
