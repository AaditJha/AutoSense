import React from "react";
import FeatureItem from "./FeatureItem";

const title = "Feature Number #";
const body = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem";

function Features() {
  return (
    <>
      <FeatureItem title={title} body={body} />
      <FeatureItem title={title} body={body} />
      <FeatureItem title={title} body={body} />
      <FeatureItem title={title} body={body} />
      <FeatureItem title={title} body={body} />
      <FeatureItem title={title} body={body} />
      <FeatureItem title={title} body={body} />
      <FeatureItem title={title} body={body} />
    </>
  );
}

export default Features;
