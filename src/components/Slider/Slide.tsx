import * as React from "react";

import { SlideContainer } from "./Slide.style";

export const Slide: React.FC<{
  image?: string;
  title?: string;
  description?: string;
}> = ({ image, title, description }) => (
  <SlideContainer>
    {image}
    {title}
    {description}
  </SlideContainer>
);
