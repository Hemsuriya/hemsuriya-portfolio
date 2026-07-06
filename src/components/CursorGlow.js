import { useEffect } from "react";

function CursorGlow() {
  useEffect(() => {
    // Fine-pointer/hover devices only: on touch screens there is no
    // mousemove to position these layers, so they would otherwise sit at
    // their default in-flow position and render as a stray glowing overlay.
    const supportsHoverCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!supportsHoverCursor) return undefined;

    const outer = document.createElement("div");
    const inner = document.createElement("div");

    const styleLayer = (node, size, blur, background) => {
      node.style.position = "fixed";
      node.style.top = "0";
      node.style.left = "0";
      node.style.width = size;
      node.style.height = size;
      node.style.borderRadius = "50%";
      node.style.background = background;
      node.style.pointerEvents = "none";
      node.style.filter = `blur(${blur})`;
      node.style.opacity = "0";
      node.style.zIndex = "2";
      node.style.mixBlendMode = "screen";
      node.style.transition = "transform 180ms ease, opacity 180ms ease";
      document.body.appendChild(node);
    };

    styleLayer(
      outer,
      "340px",
      "110px",
      "radial-gradient(circle, rgba(93,231,255,0.24), rgba(109,139,255,0.08) 40%, transparent 72%)"
    );
    styleLayer(
      inner,
      "160px",
      "42px",
      "radial-gradient(circle, rgba(255,191,105,0.24), rgba(93,231,255,0.12) 42%, transparent 72%)"
    );

    let revealed = false;
    const move = (e) => {
      outer.style.transform = `translate(${e.clientX - 170}px, ${e.clientY - 170}px)`;
      inner.style.transform = `translate(${e.clientX - 80}px, ${e.clientY - 80}px)`;
      if (!revealed) {
        revealed = true;
        outer.style.opacity = "0.9";
        inner.style.opacity = "0.75";
      }
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
