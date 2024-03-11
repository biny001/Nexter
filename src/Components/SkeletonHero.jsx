import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonHero = ({ props }) => {
  return (
    <ContentLoader
      speed={2}
      width={1600}
      height={500}
      viewBox="0 0 1400 400"
      backgroundColor="#111013"
      foregroundColor="#343334"
      {...props}
    >
      <rect
        x="209"
        y="105"
        rx="0"
        ry="0"
        width="2"
        height="1"
      />
      <rect
        x="4"
        y="281"
        rx="0"
        ry="0"
        width="132"
        height="17"
      />
      <rect
        x="7"
        y="0"
        rx="0"
        ry="0"
        width="1500"
        height="400"
      />
    </ContentLoader>
  );
};

export default SkeletonHero;
