// HeadComponent.js
import React from "react";
import { Helmet } from "react-helmet";

const HeadComponent = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Noto+Sans+KR:wght@100..900&display=swap"
        rel="stylesheet"
      />
      {/* Favicon */}
      <link rel="icon" href="/img/Rogo.svg" type="/image/svg+xml" />
      <link rel="icon" href="/img/favicon.ico" />
      {/* Title */}
      <title>0000 Art Museum</title>
      {/* Meta Tags */}
      <meta name="description" content="0000 Art Museum Description" />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://0000-artmuseum.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="0000 Art Museum" />
      <meta
        property="og:description"
        content="0000ArtMuseum(에이아이 아트 뮤지엄)"
      />
      <meta property="og:image" content="/img/artmuseum.png" />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="0000-artmuseum.netlify.app" />
      <meta
        property="twitter:url"
        content="https://0000-artmuseum.netlify.app/"
      />
      <meta name="twitter:title" content="0000 Art Museum" />
      <meta
        name="twitter:description"
        content="0000ArtMuseum(에이아이 아트 뮤지엄)"
      />
      <meta name="twitter:image" content="/img/artmuseum.png" />
      console.log("해드컨버넌트");
    </Helmet>
  );
};

export default HeadComponent;
