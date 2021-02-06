import React from "react";

import {
  StyledCard,
  CardTitle,
  CardContent,
  CardTitleContainer,
} from "./Card.style";

const Card: React.FC<{
  padding?: number;
  title?: string;
  children: React.ReactNode;
}> = ({ title, children, padding }) => (
  <StyledCard padding={padding}>
    {Boolean(title) && (
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
      </CardTitleContainer>
    )}
    <CardContent>{children}</CardContent>
  </StyledCard>
);

export default Card;
