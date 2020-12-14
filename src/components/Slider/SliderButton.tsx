import * as React from "react";

import { Button } from "./SliderButton.style";

export const SliderButton: React.FC<{
  onClick?: () => void;
  position: "left" | "right";
}> = ({ onClick, position }) => (
  <Button onClick={onClick} position={position} />
);
