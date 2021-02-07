import React from "react";

import Card from "../Card";
import Button from "../Inputs/Button";
import { SourceContainer } from "./GameSource.style";

const GameSource: React.FC<{ link?: string }> = ({ link = "" }) => {
  if (!link) {
    return null;
  }

  return (
    <Card title="Source">
      <SourceContainer>
        <a href={link} target="_blank" rel="noreferrer">
          <Button icon={["fab", "github"]}>{"View Source"}</Button>
        </a>
      </SourceContainer>
    </Card>
  );
};

export default GameSource;
