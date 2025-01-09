import React, { useEffect } from "react";

interface InstagramEmbedProps {
  url: string; // L'URL du post Instagram
  width?: string; // Largeur du widget
  height?: string; // Hauteur du widget
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({
  url,
  width = "100%",
  height = "auto",
}) => {
  useEffect(() => {
    // Charger le script Instagram si ce n'est pas déjà fait
    if (!document.querySelector("script[src='https://www.instagram.com/embed.js']")) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Réinitialiser les widgets pour recharger les nouveaux posts
      (window as any).instgrm?.Embeds.process();
    }
  }, [url]);

  return (
    <div className="instagram-embed p-5" style={{ width, height }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ maxWidth: "100%", margin: "auto" }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
