import React from "react";

import Card from "../Card";

import { CONTROLS } from "../../constants/controls";

import { ControlImage, ControlItem, ControlText } from "./GameControls.style";
import { Control } from "../../models";

const GameControls: React.FC<{ controls?: Control[] }> = ({
  controls = [],
}) => {
  if (!controls.length) {
    return null;
  }

  return (
    <Card title="Controls">
      {controls.map((control) => {
        const cont = CONTROLS[control.type];

        if (!cont) {
          return null;
        }

        return (
          <ControlItem key={control.type}>
            <ControlImage alt={cont.name} title={cont.name} src={cont.image} />
            <ControlText>{control.description}</ControlText>
          </ControlItem>
        );
      })}
    </Card>
  );
};

export default GameControls;
