import React from "react";
import type { GameFile } from "../../models";

import Card from "../Card";
import Button from "../Inputs/Button";
import { SourceContainer } from "./GameSource.style";

const GameSource: React.FC<{ files: GameFile[] }> = ({ files }) => {
  const source = files.find((file) => file.platform === "source");

  if (!source) {
    return null;
  }

  return (
    <Card title="Source">
      <SourceContainer>
        <a href={source.url} target="_blank" rel="noreferrer">
          <Button icon={["fab", "github"]}>{"View Source"}</Button>
        </a>
      </SourceContainer>
    </Card>
  );
};

export default GameSource;
