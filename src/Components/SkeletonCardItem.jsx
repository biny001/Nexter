import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCardItem = (props) => (
  <ContentLoader
    speed={2}
    width={800}
    height={300}
    viewBox="0 0 800 300"
    backgroundColor="#111013"
    foregroundColor="#343334"
    {...props}
  >
    {/* Adjusted positioning of the loader elements */}
    <rect
      x="25"
      y="0"
      rx="16"
      ry="16"
      width="200"
      height="250"
    />
    <rect
      x="68.5"
      y="264"
      rx="3"
      ry="3"
      width="117"
      height="14"
    />
  </ContentLoader>
);

export default SkeletonCardItem;
