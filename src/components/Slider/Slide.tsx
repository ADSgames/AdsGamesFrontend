import * as React from "react";

import * as ROUTES from "../../constants/routes";

import {
  SlideContainer,
  SlideImage,
  ToolTip,
  ToolTipBody,
  ToolTipHead,
} from "./Slide.style";

export const Slide: React.FC<{
  image?: string;
  title?: string;
  description?: string;
  index: number;
  currentIndex: number;
  id: string;
}> = ({ image, title, description, index, currentIndex, id }) => {
  if (currentIndex !== index) {
    return null;
  }

  return (
    <SlideContainer to={`${ROUTES.GAMES}${id}`}>
      <SlideImage src={image} />
      <ToolTip>
        <ToolTipHead>{title}</ToolTipHead>
        <ToolTipBody>{description}</ToolTipBody>
      </ToolTip>
    </SlideContainer>
  );
};
