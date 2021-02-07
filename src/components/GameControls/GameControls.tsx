import React from "react";

import Card from "../Card";

import { CONTROLS } from "../../constants/controls";

import { ControlImage, ControlItem, ControlText } from "./GameControls.style";
import { Control } from "../../models";
import { useListQuery } from "../../hooks/useListQuery";

const GameControls: React.FC<{ gameID: string }> = ({ gameID }) => {
  const { data: controls } = useListQuery<Control>(Control, (c) =>
    c.gameID("eq", gameID)
  );

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
